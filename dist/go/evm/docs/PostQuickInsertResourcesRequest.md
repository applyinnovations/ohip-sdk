# PostQuickInsertResourcesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**QuickInsertResourceListInfo** | Pointer to [**[]QuickInsertResourceListType**](QuickInsertResourceListType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success elementSpace to define a business error. | [optional] 

## Methods

### NewPostQuickInsertResourcesRequest

`func NewPostQuickInsertResourcesRequest() *PostQuickInsertResourcesRequest`

NewPostQuickInsertResourcesRequest instantiates a new PostQuickInsertResourcesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostQuickInsertResourcesRequestWithDefaults

`func NewPostQuickInsertResourcesRequestWithDefaults() *PostQuickInsertResourcesRequest`

NewPostQuickInsertResourcesRequestWithDefaults instantiates a new PostQuickInsertResourcesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQuickInsertResourceListInfo

`func (o *PostQuickInsertResourcesRequest) GetQuickInsertResourceListInfo() []QuickInsertResourceListType`

GetQuickInsertResourceListInfo returns the QuickInsertResourceListInfo field if non-nil, zero value otherwise.

### GetQuickInsertResourceListInfoOk

`func (o *PostQuickInsertResourcesRequest) GetQuickInsertResourceListInfoOk() (*[]QuickInsertResourceListType, bool)`

GetQuickInsertResourceListInfoOk returns a tuple with the QuickInsertResourceListInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuickInsertResourceListInfo

`func (o *PostQuickInsertResourcesRequest) SetQuickInsertResourceListInfo(v []QuickInsertResourceListType)`

SetQuickInsertResourceListInfo sets QuickInsertResourceListInfo field to given value.

### HasQuickInsertResourceListInfo

`func (o *PostQuickInsertResourcesRequest) HasQuickInsertResourceListInfo() bool`

HasQuickInsertResourceListInfo returns a boolean if a field has been set.

### GetWarnings

`func (o *PostQuickInsertResourcesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostQuickInsertResourcesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostQuickInsertResourcesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostQuickInsertResourcesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


