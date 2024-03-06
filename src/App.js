import { useState } from 'react'

function App() {
  const [nestedObjected, setNestedObject] = useState({
    taxi: 'Ücret karşılığında yolcu taşımak için lisanslı bir araç',
    food: {
      sushi:
        'Deniz ürünleri ve sebzelerle birlikte sunulan geleneksel bir Japon yemeği',
      apple: {
        Honeycrisp:
          "MAES Bahçe Araştırma Merkezi'nde geliştirilen bir elma çeşidi",
        Fuji: "Tohoku Araştırma İstasyonu'nda yetiştiriciler tarafından geliştirilen bir elma çeşidi",
      },
    },
  })

  return (
    <div style={{ margin: 'auto', width: '70%', paddingTop: 40 }}>
      <DisplayNested nestedObjected={nestedObjected} />
    </div>
  )
}
// Fonksiyonu tanımlarken, iç içe geçmiş nesnelerin girinti düzeyini belirlemek için bir `indent` parametresi eklenmiştir.
//indent parametresi, her bir iç içe geçmiş nesnenin düzeyini belirtmek için kullanılır. Bu parametre, her bir öğenin kaç seviye iç içe olduğunu belirlememizi sağlar. Bu da girintili bir çıktı oluştururken her seviyede uygun miktarda girinti eklememize yardımcı olur.
const DisplayNested = ({ nestedObjected, indent = 0 }) => {
  return (
    <div>
      {/*`Object.entries()` kullanılarak nesnenin her bir özelliği ve değeri dolaşılır.*/}
      {Object.entries(nestedObjected).map(([key, value]) => (
        <div key={key} style={{ marginLeft: indent * 20 }}>{/*// Her bir özellik için bir `div` oluşturulur ve girinti düzeyine göre bir `marginLeft` değeri belirlenir.
      <strong>{key}:</strong> // Her özellik için bir başlık (`strong`) oluşturulur. */}
          <strong>{key}:</strong>{/*Her özellik için bir başlık (`strong`) oluşturulur. */}
          {/* Değer bir nesne ise, bu iç içe geçmiş nesne yapısını işlemek için `DisplayNested` bileşeni tekrar çağırılır. */}
          {typeof value === 'object' ? ( 
            <DisplayNested nestedObjected={value} indent={indent + 1} /> 
          ) : (
            <span>{value}</span>
          )}
          {/*// Yeni bir iç içe geçmiş nesne yapısını render etmek için `DisplayNested` bileşeni tekrar çağırılır ve girinti düzeyi bir arttırılır. */}
          {/*Değer bir dize ise, sadece değeri gösteren bir `span` oluşturulur. */}
        </div>
      ))}
    </div>
  );
};

export default App
