# ActivityStatType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UnitType** | Pointer to **string** | Unit of measurement or the actual code that defines the value. Eg. CurrencyCode for the Amount Category. | [optional] 
**UnitValue** | Pointer to **float32** | Statistical value. | [optional] 
**UnitCategory** | Pointer to [**StatUnitCategoryType**](StatUnitCategoryType.md) |  | [optional] 
**Code** | Pointer to [**ActivityStatCodeType**](ActivityStatCodeType.md) |  | [optional] 

## Methods

### NewActivityStatType

`func NewActivityStatType() *ActivityStatType`

NewActivityStatType instantiates a new ActivityStatType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivityStatTypeWithDefaults

`func NewActivityStatTypeWithDefaults() *ActivityStatType`

NewActivityStatTypeWithDefaults instantiates a new ActivityStatType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUnitType

`func (o *ActivityStatType) GetUnitType() string`

GetUnitType returns the UnitType field if non-nil, zero value otherwise.

### GetUnitTypeOk

`func (o *ActivityStatType) GetUnitTypeOk() (*string, bool)`

GetUnitTypeOk returns a tuple with the UnitType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnitType

`func (o *ActivityStatType) SetUnitType(v string)`

SetUnitType sets UnitType field to given value.

### HasUnitType

`func (o *ActivityStatType) HasUnitType() bool`

HasUnitType returns a boolean if a field has been set.

### GetUnitValue

`func (o *ActivityStatType) GetUnitValue() float32`

GetUnitValue returns the UnitValue field if non-nil, zero value otherwise.

### GetUnitValueOk

`func (o *ActivityStatType) GetUnitValueOk() (*float32, bool)`

GetUnitValueOk returns a tuple with the UnitValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnitValue

`func (o *ActivityStatType) SetUnitValue(v float32)`

SetUnitValue sets UnitValue field to given value.

### HasUnitValue

`func (o *ActivityStatType) HasUnitValue() bool`

HasUnitValue returns a boolean if a field has been set.

### GetUnitCategory

`func (o *ActivityStatType) GetUnitCategory() StatUnitCategoryType`

GetUnitCategory returns the UnitCategory field if non-nil, zero value otherwise.

### GetUnitCategoryOk

`func (o *ActivityStatType) GetUnitCategoryOk() (*StatUnitCategoryType, bool)`

GetUnitCategoryOk returns a tuple with the UnitCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnitCategory

`func (o *ActivityStatType) SetUnitCategory(v StatUnitCategoryType)`

SetUnitCategory sets UnitCategory field to given value.

### HasUnitCategory

`func (o *ActivityStatType) HasUnitCategory() bool`

HasUnitCategory returns a boolean if a field has been set.

### GetCode

`func (o *ActivityStatType) GetCode() ActivityStatCodeType`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *ActivityStatType) GetCodeOk() (*ActivityStatCodeType, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *ActivityStatType) SetCode(v ActivityStatCodeType)`

SetCode sets Code field to given value.

### HasCode

`func (o *ActivityStatType) HasCode() bool`

HasCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


