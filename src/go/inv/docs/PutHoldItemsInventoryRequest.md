# PutHoldItemsInventoryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HoldItemInfo** | Pointer to [**HoldItemInventoryType**](HoldItemInventoryType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutHoldItemsInventoryRequest

`func NewPutHoldItemsInventoryRequest() *PutHoldItemsInventoryRequest`

NewPutHoldItemsInventoryRequest instantiates a new PutHoldItemsInventoryRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutHoldItemsInventoryRequestWithDefaults

`func NewPutHoldItemsInventoryRequestWithDefaults() *PutHoldItemsInventoryRequest`

NewPutHoldItemsInventoryRequestWithDefaults instantiates a new PutHoldItemsInventoryRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHoldItemInfo

`func (o *PutHoldItemsInventoryRequest) GetHoldItemInfo() HoldItemInventoryType`

GetHoldItemInfo returns the HoldItemInfo field if non-nil, zero value otherwise.

### GetHoldItemInfoOk

`func (o *PutHoldItemsInventoryRequest) GetHoldItemInfoOk() (*HoldItemInventoryType, bool)`

GetHoldItemInfoOk returns a tuple with the HoldItemInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHoldItemInfo

`func (o *PutHoldItemsInventoryRequest) SetHoldItemInfo(v HoldItemInventoryType)`

SetHoldItemInfo sets HoldItemInfo field to given value.

### HasHoldItemInfo

`func (o *PutHoldItemsInventoryRequest) HasHoldItemInfo() bool`

HasHoldItemInfo returns a boolean if a field has been set.

### GetLinks

`func (o *PutHoldItemsInventoryRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutHoldItemsInventoryRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutHoldItemsInventoryRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutHoldItemsInventoryRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutHoldItemsInventoryRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutHoldItemsInventoryRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutHoldItemsInventoryRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutHoldItemsInventoryRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


