# PostRevenueGroupsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RevenueGroups** | Pointer to [**[]RevenueGroupType**](RevenueGroupType.md) | Details for Catering Revenue Group along with associated Revenue Type codes. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostRevenueGroupsRequest

`func NewPostRevenueGroupsRequest() *PostRevenueGroupsRequest`

NewPostRevenueGroupsRequest instantiates a new PostRevenueGroupsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostRevenueGroupsRequestWithDefaults

`func NewPostRevenueGroupsRequestWithDefaults() *PostRevenueGroupsRequest`

NewPostRevenueGroupsRequestWithDefaults instantiates a new PostRevenueGroupsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostRevenueGroupsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostRevenueGroupsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostRevenueGroupsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostRevenueGroupsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRevenueGroups

`func (o *PostRevenueGroupsRequest) GetRevenueGroups() []RevenueGroupType`

GetRevenueGroups returns the RevenueGroups field if non-nil, zero value otherwise.

### GetRevenueGroupsOk

`func (o *PostRevenueGroupsRequest) GetRevenueGroupsOk() (*[]RevenueGroupType, bool)`

GetRevenueGroupsOk returns a tuple with the RevenueGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueGroups

`func (o *PostRevenueGroupsRequest) SetRevenueGroups(v []RevenueGroupType)`

SetRevenueGroups sets RevenueGroups field to given value.

### HasRevenueGroups

`func (o *PostRevenueGroupsRequest) HasRevenueGroups() bool`

HasRevenueGroups returns a boolean if a field has been set.

### GetWarnings

`func (o *PostRevenueGroupsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostRevenueGroupsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostRevenueGroupsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostRevenueGroupsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


