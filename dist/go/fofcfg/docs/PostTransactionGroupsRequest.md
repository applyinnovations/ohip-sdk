# PostTransactionGroupsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TransactionGroups** | Pointer to [**[]HotelTransactionGroupType**](HotelTransactionGroupType.md) | Hotel&#39;s Transaction Group configuration. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostTransactionGroupsRequest

`func NewPostTransactionGroupsRequest() *PostTransactionGroupsRequest`

NewPostTransactionGroupsRequest instantiates a new PostTransactionGroupsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostTransactionGroupsRequestWithDefaults

`func NewPostTransactionGroupsRequestWithDefaults() *PostTransactionGroupsRequest`

NewPostTransactionGroupsRequestWithDefaults instantiates a new PostTransactionGroupsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactionGroups

`func (o *PostTransactionGroupsRequest) GetTransactionGroups() []HotelTransactionGroupType`

GetTransactionGroups returns the TransactionGroups field if non-nil, zero value otherwise.

### GetTransactionGroupsOk

`func (o *PostTransactionGroupsRequest) GetTransactionGroupsOk() (*[]HotelTransactionGroupType, bool)`

GetTransactionGroupsOk returns a tuple with the TransactionGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionGroups

`func (o *PostTransactionGroupsRequest) SetTransactionGroups(v []HotelTransactionGroupType)`

SetTransactionGroups sets TransactionGroups field to given value.

### HasTransactionGroups

`func (o *PostTransactionGroupsRequest) HasTransactionGroups() bool`

HasTransactionGroups returns a boolean if a field has been set.

### GetLinks

`func (o *PostTransactionGroupsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostTransactionGroupsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostTransactionGroupsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostTransactionGroupsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostTransactionGroupsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostTransactionGroupsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostTransactionGroupsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostTransactionGroupsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


