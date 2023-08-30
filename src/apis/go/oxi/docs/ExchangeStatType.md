# ExchangeStatType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UnitType** | Pointer to **string** | Unit of measurement or the actual code that defines the value. Eg. CurrencyCode for the Amount Category. | [optional] 
**UnitValue** | Pointer to **float32** | Statistical value. | [optional] 
**UnitCategory** | Pointer to [**StatUnitCategoryType**](StatUnitCategoryType.md) |  | [optional] 
**Code** | Pointer to [**ExchangeStatCodeType**](ExchangeStatCodeType.md) |  | [optional] 

## Methods

### NewExchangeStatType

`func NewExchangeStatType() *ExchangeStatType`

NewExchangeStatType instantiates a new ExchangeStatType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExchangeStatTypeWithDefaults

`func NewExchangeStatTypeWithDefaults() *ExchangeStatType`

NewExchangeStatTypeWithDefaults instantiates a new ExchangeStatType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUnitType

`func (o *ExchangeStatType) GetUnitType() string`

GetUnitType returns the UnitType field if non-nil, zero value otherwise.

### GetUnitTypeOk

`func (o *ExchangeStatType) GetUnitTypeOk() (*string, bool)`

GetUnitTypeOk returns a tuple with the UnitType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnitType

`func (o *ExchangeStatType) SetUnitType(v string)`

SetUnitType sets UnitType field to given value.

### HasUnitType

`func (o *ExchangeStatType) HasUnitType() bool`

HasUnitType returns a boolean if a field has been set.

### GetUnitValue

`func (o *ExchangeStatType) GetUnitValue() float32`

GetUnitValue returns the UnitValue field if non-nil, zero value otherwise.

### GetUnitValueOk

`func (o *ExchangeStatType) GetUnitValueOk() (*float32, bool)`

GetUnitValueOk returns a tuple with the UnitValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnitValue

`func (o *ExchangeStatType) SetUnitValue(v float32)`

SetUnitValue sets UnitValue field to given value.

### HasUnitValue

`func (o *ExchangeStatType) HasUnitValue() bool`

HasUnitValue returns a boolean if a field has been set.

### GetUnitCategory

`func (o *ExchangeStatType) GetUnitCategory() StatUnitCategoryType`

GetUnitCategory returns the UnitCategory field if non-nil, zero value otherwise.

### GetUnitCategoryOk

`func (o *ExchangeStatType) GetUnitCategoryOk() (*StatUnitCategoryType, bool)`

GetUnitCategoryOk returns a tuple with the UnitCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnitCategory

`func (o *ExchangeStatType) SetUnitCategory(v StatUnitCategoryType)`

SetUnitCategory sets UnitCategory field to given value.

### HasUnitCategory

`func (o *ExchangeStatType) HasUnitCategory() bool`

HasUnitCategory returns a boolean if a field has been set.

### GetCode

`func (o *ExchangeStatType) GetCode() ExchangeStatCodeType`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *ExchangeStatType) GetCodeOk() (*ExchangeStatCodeType, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *ExchangeStatType) SetCode(v ExchangeStatCodeType)`

SetCode sets Code field to given value.

### HasCode

`func (o *ExchangeStatType) HasCode() bool`

HasCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


