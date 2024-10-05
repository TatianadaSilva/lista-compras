import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importa o CommonModule

@Component({
  selector: 'app-lista-compras',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // Adicione o CommonModule aqui
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})
export class ListaComprasComponent {
  formularioAdicao: FormGroup;
  itensNaoComprados: any[] = []; // Inicializa a lista de itens não comprados
  itensComprados: any[] = []; // Inicializa a lista de itens comprados

  constructor(private fb: FormBuilder) {
    this.formularioAdicao = this.fb.group({
      item: [''] // Campo para adicionar um item
    });
  }

  // Método para adicionar item
  addItem() {
    if (this.formularioAdicao.valid) {
      const novoItem = { nome: this.formularioAdicao.value.item, comprado: false }; // Adiciona um novo item
      this.itensNaoComprados.push(novoItem); // Adiciona à lista de itens não comprados
      this.formularioAdicao.reset(); // Reseta o formulário
    }
  }

  // Método para alternar o status do item
  toggleItemStatus(item: any) {
    item.comprado = !item.comprado; // Inverte o status do item
    if (item.comprado) {
      this.itensComprados.push(item); // Adiciona à lista de itens comprados
      this.itensNaoComprados = this.itensNaoComprados.filter(i => i !== item); // Remove da lista de itens não comprados
    } else {
      this.itensNaoComprados.push(item); // Adiciona de volta à lista de itens não comprados
      this.itensComprados = this.itensComprados.filter(i => i !== item); // Remove da lista de itens comprados
    }
  }

  // Método para editar um item
  editItem(item: any) {
    const novoNome = prompt('Editar item:', item.nome);
    if (novoNome) {
      item.nome = novoNome; // Atualiza o nome do item
    }
  }

  // Método para excluir um item
  deleteItem(item: any) {
    if (item.comprado) {
      this.itensComprados = this.itensComprados.filter(i => i !== item); // Remove da lista de itens comprados
    } else {
      this.itensNaoComprados = this.itensNaoComprados.filter(i => i !== item); // Remove da lista de itens não comprados
    }
  }
}
