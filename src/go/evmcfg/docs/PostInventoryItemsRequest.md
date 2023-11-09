# PostInventoryItemsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | Pointer to [**InventoryItemsType**](InventoryItemsType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostInventoryItemsRequest

`func NewPostInventoryItemsRequest() *PostInventoryItemsRequest`

NewPostInventoryItemsRequest instantiates a new PostInventoryItemsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostInventoryItemsRequestWithDefaults

`func NewPostInventoryItemsRequestWithDefaults() *PostInventoryItemsRequest`

NewPostInventoryItemsRequestWithDefaults instantiates a new PostInventoryItemsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *PostInventoryItemsRequest) GetItems() InventoryItemsType`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *PostInventoryItemsRequest) GetItemsOk() (*InventoryItemsType, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *PostInventoryItemsRequest) SetItems(v InventoryItemsType)`

SetItems sets Items field to given value.

### HasItems

`func (o *PostInventoryItemsRequest) HasItems() bool`

HasItems returns a boolean if a field has been set.

### GetLinks

`func (o *PostInventoryItemsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostInventoryItemsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostInventoryItemsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostInventoryItemsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostInventoryItemsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostInventoryItemsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostInventoryItemsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostInventoryItemsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


