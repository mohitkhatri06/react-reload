import { FcFolder } from 'react-icons/fc';
import { FaFile } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa6';
import { useState } from 'react';

type Node = {
  name: string;
  nodes?: Node[];
};
const nodes: Node[] = [
  {
    name: 'Home',
    nodes: [
      {
        name: 'Movies',
        nodes: [
          {
            name: 'Action',
            nodes: [
              {
                name: '2018',
                nodes: [
                  {
                    name: 'Abc.mp4',
                  },
                  {
                    name: 'Abc2.mp4',
                  },
                ],
              },
              {
                name: '2019',
                nodes: [
                  {
                    name: 'Abc2019.mp4',
                  },
                ],
              },
              {
                name: '2020',
                nodes: [
                  {
                    name: 'Abc2020.mp4',
                  },
                ],
              },
            ],
          },
          {
            name: 'Comedy',
            nodes: [
              {
                name: '2022',
                nodes: [
                  {
                    name: 'Abc.mp4',
                  },
                  {
                    name: 'Abc2.mp4',
                  },
                ],
              },
              {
                name: '2023',
                nodes: [
                  {
                    name: 'Abc2023.mp4',
                  },
                ],
              },
              {
                name: '2024',
                nodes: [
                  {
                    name: 'Abc2024.mp4',
                  },
                ],
              },
            ],
          },
        ],
      },
      { name: 'Documents', nodes: [] },
      { name: 'Pictures', nodes: [] },
      { name: 'screenshot.jpg' },
    ],
  },
];

const Filesystem = () => {
  return (
    <div className=' py-4  max-w-sm mx-auto'>
      <ul className='pl-8 items-center'>
        {nodes?.map((node) => (
          <FilesystemItem node={node} key={node.name} />
        ))}
      </ul>
    </div>
  );
};
export default Filesystem;

function FilesystemItem({ node }: { node: Node }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className=' my-1' key={node.name}>
      <span className='gap-2 flex items-center flex-row'>
        {node?.nodes && node?.nodes.length > 0 && (
          <button onClick={() => setIsOpen(!isOpen)}>
            <FaChevronRight
              size={10}
              className={`text-gray-500 ${isOpen ? 'rotate-90' : ''}`}
            />
          </button>
        )}

        {node?.nodes ? (
          <FcFolder
            size={30}
            className={`${node?.nodes.length === 0 ? 'ml-[20px]' : ''}`}
          />
        ) : (
          <FaFile size={20} className='text-neutral-700 ml-[20px] ' />
        )}
        {node.name}
      </span>
      {isOpen && (
        <ul className='pl-6 items-center'>
          {node.nodes?.map((nodes) => (
            <FilesystemItem node={nodes} key={nodes.name} />
          ))}
        </ul>
      )}
    </li>
  );
}
