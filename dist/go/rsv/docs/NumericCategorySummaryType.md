# NumericCategorySummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NumericCategoryCode** | Pointer to **string** | The representation of a numeric category such as Guests : Number of guests, RoomsOcc : Rooms occupied. | [optional] 
**NumericSummary** | Pointer to **float32** | The total count for the category in NumericCategoryCode. | [optional] 

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

### GetNumericCategoryCode

`func (o *NumericCategorySummaryType) GetNumericCategoryCode() string`

GetNumericCategoryCode returns the NumericCategoryCode field if non-nil, zero value otherwise.

### GetNumericCategoryCodeOk

`func (o *NumericCategorySummaryType) GetNumericCategoryCodeOk() (*string, bool)`

GetNumericCategoryCodeOk returns a tuple with the NumericCategoryCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumericCategoryCode

`func (o *NumericCategorySummaryType) SetNumericCategoryCode(v string)`

SetNumericCategoryCode sets NumericCategoryCode field to given value.

### HasNumericCategoryCode

`func (o *NumericCategorySummaryType) HasNumericCategoryCode() bool`

HasNumericCategoryCode returns a boolean if a field has been set.

### GetNumericSummary

`func (o *NumericCategorySummaryType) GetNumericSummary() float32`

GetNumericSummary returns the NumericSummary field if non-nil, zero value otherwise.

### GetNumericSummaryOk

`func (o *NumericCategorySummaryType) GetNumericSummaryOk() (*float32, bool)`

GetNumericSummaryOk returns a tuple with the NumericSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumericSummary

`func (o *NumericCategorySummaryType) SetNumericSummary(v float32)`

SetNumericSummary sets NumericSummary field to given value.

### HasNumericSummary

`func (o *NumericCategorySummaryType) HasNumericSummary() bool`

HasNumericSummary returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


