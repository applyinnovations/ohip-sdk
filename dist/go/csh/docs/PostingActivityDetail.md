# PostingActivityDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Details** | Pointer to [**PostingActivityDetailType**](PostingActivityDetailType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostingActivityDetail

`func NewPostingActivityDetail() *PostingActivityDetail`

NewPostingActivityDetail instantiates a new PostingActivityDetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostingActivityDetailWithDefaults

`func NewPostingActivityDetailWithDefaults() *PostingActivityDetail`

NewPostingActivityDetailWithDefaults instantiates a new PostingActivityDetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDetails

`func (o *PostingActivityDetail) GetDetails() PostingActivityDetailType`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *PostingActivityDetail) GetDetailsOk() (*PostingActivityDetailType, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *PostingActivityDetail) SetDetails(v PostingActivityDetailType)`

SetDetails sets Details field to given value.

### HasDetails

`func (o *PostingActivityDetail) HasDetails() bool`

HasDetails returns a boolean if a field has been set.

### GetLinks

`func (o *PostingActivityDetail) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostingActivityDetail) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostingActivityDetail) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostingActivityDetail) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostingActivityDetail) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostingActivityDetail) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostingActivityDetail) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostingActivityDetail) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


