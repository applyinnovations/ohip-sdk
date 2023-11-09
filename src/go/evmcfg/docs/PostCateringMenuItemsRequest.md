# PostCateringMenuItemsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CateringMenuItems** | Pointer to [**CateringMenuItemListType**](CateringMenuItemListType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostCateringMenuItemsRequest

`func NewPostCateringMenuItemsRequest() *PostCateringMenuItemsRequest`

NewPostCateringMenuItemsRequest instantiates a new PostCateringMenuItemsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostCateringMenuItemsRequestWithDefaults

`func NewPostCateringMenuItemsRequestWithDefaults() *PostCateringMenuItemsRequest`

NewPostCateringMenuItemsRequestWithDefaults instantiates a new PostCateringMenuItemsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCateringMenuItems

`func (o *PostCateringMenuItemsRequest) GetCateringMenuItems() CateringMenuItemListType`

GetCateringMenuItems returns the CateringMenuItems field if non-nil, zero value otherwise.

### GetCateringMenuItemsOk

`func (o *PostCateringMenuItemsRequest) GetCateringMenuItemsOk() (*CateringMenuItemListType, bool)`

GetCateringMenuItemsOk returns a tuple with the CateringMenuItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringMenuItems

`func (o *PostCateringMenuItemsRequest) SetCateringMenuItems(v CateringMenuItemListType)`

SetCateringMenuItems sets CateringMenuItems field to given value.

### HasCateringMenuItems

`func (o *PostCateringMenuItemsRequest) HasCateringMenuItems() bool`

HasCateringMenuItems returns a boolean if a field has been set.

### GetLinks

`func (o *PostCateringMenuItemsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostCateringMenuItemsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostCateringMenuItemsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostCateringMenuItemsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostCateringMenuItemsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostCateringMenuItemsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostCateringMenuItemsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostCateringMenuItemsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


