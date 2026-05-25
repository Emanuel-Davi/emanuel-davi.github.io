import { Brain, Grid3x3, Target, Sparkles, BookOpen, Users, Trophy, ChevronRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Brain className="text-green-600 size-8" />
            <span className="text-2xl font-bold text-green-700">Agrinho 2026</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#sobre" className="text-gray-700 hover:text-green-600 transition">Sobre</a>
            <a href="#pensamento" className="text-gray-700 hover:text-green-600 transition">Pensamento Computacional</a>
            <a href="#participe" className="text-gray-700 hover:text-green-600 transition">Participe</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
          <Sparkles className="size-4" />
          <span className="text-sm font-semibold">Edição 2026</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Agrinho 2026
          <span className="block text-green-600 mt-2">Pensamento Computacional</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Desenvolva habilidades essenciais para resolver problemas do mundo real usando lógica,
          criatividade e pensamento estruturado.
        </p>
        <a
          href="#participe"
          className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition shadow-lg hover:shadow-xl"
        >
          Inscreva-se Agora
          <ChevronRight className="size-5" />
        </a>
      </section>

      {/* O que é Pensamento Computacional */}
      <section id="pensamento" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">O que é Pensamento Computacional?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              É uma forma de pensar que nos ajuda a resolver problemas de maneira organizada e criativa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Decomposição */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition">
              <div className="bg-blue-600 text-white size-16 rounded-xl flex items-center justify-center mb-4">
                <Grid3x3 className="size-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Decomposição</h3>
              <p className="text-gray-700">
                Quebrar problemas grandes em partes menores e mais fáceis de resolver, como dividir uma receita em etapas.
              </p>
            </div>

            {/* Reconhecimento de Padrões */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-lg transition">
              <div className="bg-purple-600 text-white size-16 rounded-xl flex items-center justify-center mb-4">
                <Target className="size-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Padrões</h3>
              <p className="text-gray-700">
                Identificar similaridades e repetições que nos ajudam a prever e entender situações.
              </p>
            </div>

            {/* Abstração */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl hover:shadow-lg transition">
              <div className="bg-pink-600 text-white size-16 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="size-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Abstração</h3>
              <p className="text-gray-700">
                Focar no que é importante e ignorar detalhes desnecessários para simplificar o problema.
              </p>
            </div>

            {/* Algoritmos */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-lg transition">
              <div className="bg-green-600 text-white size-16 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="size-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Algoritmos</h3>
              <p className="text-gray-700">
                Criar sequências de passos organizados para resolver problemas de forma eficiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Concurso */}
      <section id="sobre" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre o Concurso Agrinho</h2>
              <p className="text-lg text-gray-700 mb-4">
                O Agrinho é um programa educacional que incentiva crianças e jovens a desenvolverem
                habilidades do século XXI através de projetos práticos e criativos.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Em 2026, o tema é <strong>Pensamento Computacional</strong>, onde você poderá criar
                soluções inovadoras para desafios reais da sua comunidade.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 text-green-600 size-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Para Quem?</h4>
                    <p className="text-gray-700">Estudantes do ensino fundamental e médio</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 text-green-600 size-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Trophy className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Prêmios</h4>
                    <p className="text-gray-700">Certificados, tablets e viagens educacionais</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Categorias de Participação</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 size-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Desenho e Redação</h4>
                    <p className="text-white/90">Expresse suas ideias através da arte e escrita</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 size-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Projetos Digitais</h4>
                    <p className="text-white/90">Crie jogos, apps e sites com lógica de programação</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 size-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Experiências Práticas</h4>
                    <p className="text-white/90">Desenvolva soluções para problemas da comunidade</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="participe" className="bg-gradient-to-r from-green-600 to-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Pronto para Participar?</h2>
          <p className="text-xl text-white/90 mb-8">
            Inscreva-se agora e faça parte dessa jornada de aprendizado e inovação!
          </p>
          <form className="max-w-md mx-auto bg-white rounded-xl p-8 shadow-2xl">
            <div className="mb-4">
              <label htmlFor="nome" className="block text-left text-sm font-semibold text-gray-700 mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                id="nome"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                placeholder="Seu nome"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-left text-sm font-semibold text-gray-700 mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                placeholder="seu@email.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="escola" className="block text-left text-sm font-semibold text-gray-700 mb-2">
                Escola
              </label>
              <input
                type="text"
                id="escola"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                placeholder="Nome da sua escola"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition shadow-lg"
            >
              Enviar Inscrição
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Brain className="size-8 text-green-400" />
                <span className="text-xl font-bold">Agrinho 2026</span>
              </div>
              <p className="text-gray-400">
                Desenvolvendo o futuro através do pensamento computacional
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Links Úteis</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition">Regulamento</a></li>
                <li><a href="#" className="hover:text-green-400 transition">FAQ</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Redes Sociais</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition">Facebook</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Instagram</a></li>
                <li><a href="#" className="hover:text-green-400 transition">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Agrinho. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}