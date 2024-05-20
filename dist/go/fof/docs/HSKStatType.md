# HSKStatType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Category** | Pointer to [**StatUnitCategoryType**](StatUnitCategoryType.md) |  | [optional] 
**Code** | Pointer to [**HSKStatCodeType**](HSKStatCodeType.md) |  | [optional] 
**Value** | Pointer to **float32** | Statistical value. | [optional] 

## Methods

### NewHSKStatType

`func NewHSKStatType() *HSKStatType`

NewHSKStatType instantiates a new HSKStatType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHSKStatTypeWithDefaults

`func NewHSKStatTypeWithDefaults() *HSKStatType`

NewHSKStatTypeWithDefaults instantiates a new HSKStatType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCategory

`func (o *HSKStatType) GetCategory() StatUnitCategoryType`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *HSKStatType) GetCategoryOk() (*StatUnitCategoryType, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *HSKStatType) SetCategory(v StatUnitCategoryType)`

SetCategory sets Category field to given value.

### HasCategory

`func (o *HSKStatType) HasCategory() bool`

HasCategory returns a boolean if a field has been set.

### GetCode

`func (o *HSKStatType) GetCode() HSKStatCodeType`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *HSKStatType) GetCodeOk() (*HSKStatCodeType, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *HSKStatType) SetCode(v HSKStatCodeType)`

SetCode sets Code field to given value.

### HasCode

`func (o *HSKStatType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetValue

`func (o *HSKStatType) GetValue() float32`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *HSKStatType) GetValueOk() (*float32, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *HSKStatType) SetValue(v float32)`

SetValue sets Value field to given value.

### HasValue

`func (o *HSKStatType) HasValue() bool`

HasValue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


