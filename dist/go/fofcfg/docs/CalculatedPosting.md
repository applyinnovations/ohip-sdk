# CalculatedPosting

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Result** | Pointer to [**CalculatePostingResult**](CalculatePostingResult.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCalculatedPosting

`func NewCalculatedPosting() *CalculatedPosting`

NewCalculatedPosting instantiates a new CalculatedPosting object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCalculatedPostingWithDefaults

`func NewCalculatedPostingWithDefaults() *CalculatedPosting`

NewCalculatedPostingWithDefaults instantiates a new CalculatedPosting object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetResult

`func (o *CalculatedPosting) GetResult() CalculatePostingResult`

GetResult returns the Result field if non-nil, zero value otherwise.

### GetResultOk

`func (o *CalculatedPosting) GetResultOk() (*CalculatePostingResult, bool)`

GetResultOk returns a tuple with the Result field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResult

`func (o *CalculatedPosting) SetResult(v CalculatePostingResult)`

SetResult sets Result field to given value.

### HasResult

`func (o *CalculatedPosting) HasResult() bool`

HasResult returns a boolean if a field has been set.

### GetLinks

`func (o *CalculatedPosting) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CalculatedPosting) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CalculatedPosting) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CalculatedPosting) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CalculatedPosting) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CalculatedPosting) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CalculatedPosting) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CalculatedPosting) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


