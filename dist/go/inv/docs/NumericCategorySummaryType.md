# NumericCategorySummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | Pointer to **float32** | The total count for the category in NumericCategoryCode. | [optional] 
**Code** | Pointer to **string** | The representation of a numeric category such as Guests : Number of guests, RoomsOcc : Rooms occupied. | [optional] 

## Methods

### NewNumericCategorySummaryType

`func NewNumericCategorySummaryType() *NumericCategorySummaryType`

NewNumericCategorySummaryType instantiates a new NumericCategorySummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNumericCategorySummaryTypeWithDefaults

`func NewNumericCategorySummaryTypeWithDefaults() *NumericCategorySummaryType`

NewNumericCategorySummaryTypeWithDefaults instantiates a new NumericCategorySummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValue

`func (o *NumericCategorySummaryType) GetValue() float32`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *NumericCategorySummaryType) GetValueOk() (*float32, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *NumericCategorySummaryType) SetValue(v float32)`

SetValue sets Value field to given value.

### HasValue

`func (o *NumericCategorySummaryType) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetCode

`func (o *NumericCategorySummaryType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *NumericCategorySummaryType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *NumericCategorySummaryType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *NumericCategorySummaryType) HasCode() bool`

HasCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


