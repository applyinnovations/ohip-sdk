# PostingSummaryList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**PostingSummaries** | Pointer to [**[]PostingSummaryType**](PostingSummaryType.md) | Summary of the postings by external system. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostingSummaryList

`func NewPostingSummaryList() *PostingSummaryList`

NewPostingSummaryList instantiates a new PostingSummaryList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostingSummaryListWithDefaults

`func NewPostingSummaryListWithDefaults() *PostingSummaryList`

NewPostingSummaryListWithDefaults instantiates a new PostingSummaryList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostingSummaryList) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostingSummaryList) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostingSummaryList) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostingSummaryList) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPostingSummaries

`func (o *PostingSummaryList) GetPostingSummaries() []PostingSummaryType`

GetPostingSummaries returns the PostingSummaries field if non-nil, zero value otherwise.

### GetPostingSummariesOk

`func (o *PostingSummaryList) GetPostingSummariesOk() (*[]PostingSummaryType, bool)`

GetPostingSummariesOk returns a tuple with the PostingSummaries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingSummaries

`func (o *PostingSummaryList) SetPostingSummaries(v []PostingSummaryType)`

SetPostingSummaries sets PostingSummaries field to given value.

### HasPostingSummaries

`func (o *PostingSummaryList) HasPostingSummaries() bool`

HasPostingSummaries returns a boolean if a field has been set.

### GetWarnings

`func (o *PostingSummaryList) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostingSummaryList) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostingSummaryList) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostingSummaryList) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


