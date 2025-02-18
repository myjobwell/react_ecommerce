//CADASTRAR PRODUTO
import {useEffect, useState} from "react";
import Input from "./Input.jsx";
import ModalSuccess from "./ModalSuccess.jsx";


function CadastrarProduto() {
        const [title, setTitle] = useState('');
        const [category, setCategory] = useState('');
        const [description, setDescription] = useState('');
        const [image, setImage] = useState('');
        const [price, setPrice] = useState('');
        const [rate, setRate] = useState('');
        const [modal, setModal] = useState(false);

    // function cadastrarProduto(event) e enviar os dados para o backend
    const cadastrarProduto = async (event) => {
        event.preventDefault(); //evita o recarregamento da pagina

        //transformei o json com a mesma nomeclatura que está no backend
        const produto = {
            title: title,
            categoria: category,
            descricao: description,
            imagem: image,
            preco: price,
            rate:rate
        }

        try {
            const response = await fetch('http://localhost:8080/produto/inserir', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(produto)
            });

            if (response.ok) {

                // <ModalSuccess
                // text="Sucesso ao cadastrar o produto!"
                // />;

                setModal(true);

                // alert('Produto cadastrado com sucesso!');
                setTitle('');
                setCategory('');
                setDescription('');
                setImage('');
                setPrice('');
                setRate('');

                // Esconde o modal após 3 segundos
                setTimeout(() => {
                    setModal(false);
                }, 3000); // 3000 milissegundos = 3 segundos


            } else {


                alert('Erro ao cadastrar o produto!');
            }
        } catch (error) {
            alert('Erro ao cadastrar o produto!');
            console.error(error);
        }

    }







        return (

            <div className="w-[800px] flex flex-col justify-start p-10">
                <h1 className='text-2xl text-slate-600 font-bold py-2'>Cadastrar Produto</h1>
                {/*<form onSubmit={cadastrarProduto}>*/}
                    <Input
                        name="title"
                        label="Título do Produto"
                        type="text"
                        placeholder="Digite o nome do produto"
                        value={title}
                        onChange={(event) => setTitle(event.target.value) }
                    />
                    <Input
                        name="category"
                        label="Categoria do Produto"
                        type="text"
                        placeholder="Digite a categoria do produto"
                        value={category}
                        onChange={(event) => setCategory(event.target.value) }
                    />
                    <Input
                        name="description"
                        label="Descrição do produto"
                        type="text"
                        placeholder="Detalhes sobre o produto"
                        value={description}
                        onChange={(event) => setDescription(event.target.value) }
                    />
                    <Input
                        name="image"
                        label="URL da Imagem do Produto"
                        type="text"
                        placeholder="Link da imagem do produto"
                        value={image}
                        onChange={(event) => setImage(event.target.value) }
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            name="price"
                            label="Preço do produto"
                            type="number"
                            placeholder="Informe um valor"
                            value={price}
                            onChange={(event) => setPrice(event.target.value) }
                        />
                        <Input
                            name="rate"
                            label="Pontuação "
                            type="number"
                            placeholder="Informe um valor"
                            value={rate}
                            onChange={(event) => setRate(event.target.value) }
                        />

                    </div>

                    <button className='w-full bg-[#148787] text-xl text-slate-50 p-4 mt-3 rounded-md
                                        hover:bg-[#7ccfcf] hover:scale-105 transition duration-300' type="submit"
                            onClick={cadastrarProduto}
                    >
                       CADASTRA PRODUTO
                    </button>

                    {modal && <ModalSuccess text="Sucesso ao cadastrar o produto!" />}


                {/*</form>*/}
            </div>

    );

}

export default CadastrarProduto;


