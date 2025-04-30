# CateringEventItemsProcessedInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel code where item will be copied. | [optional] 
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**EventName** | Pointer to **string** | Name of event where item will be copied. | [optional] 
**ItemName** | Pointer to **string** | Name of Item. | [optional] 
**Quantity** | Pointer to **int32** | Quantity of Item. | [optional] 
**InternalQty** | Pointer to **int32** | Internal Quantity of Item. | [optional] 
**ExternalQty** | Pointer to **int32** | External Quantity of Item. | [optional] 
**Status** | Pointer to **string** | Status of the processed event. e.g Completed, Not Processed. | [optional] 
**Reason** | Pointer to **string** | Reason for not processing the item. | [optional] 

## Methods

### NewCateringEventItemsProcessedInfoType

`func NewCateringEventItemsProcessedInfoType() *CateringEventItemsProcessedInfoType`

NewCateringEventItemsProcessedInfoType instantiates a new CateringEventItemsProcessedInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringEventItemsProcessedInfoTypeWithDefaults

`func NewCateringEventItemsProcessedInfoTypeWithDefaults() *CateringEventItemsProcessedInfoType`

NewCateringEventItemsProcessedInfoTypeWithDefaults instantiates a new CateringEventItemsProcessedInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *CateringEventItemsProcessedInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CateringEventItemsProcessedInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CateringEventItemsProcessedInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CateringEventItemsProcessedInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetBlockId

`func (o *CateringEventItemsProcessedInfoType) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *CateringEventItemsProcessedInfoType) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *CateringEventItemsProcessedInfoType) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *CateringEventItemsProcessedInfoType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetEventName

`func (o *CateringEventItemsProcessedInfoType) GetEventName() string`

GetEventName returns the EventName field if non-nil, zero value otherwise.

### GetEventNameOk

`func (o *CateringEventItemsProcessedInfoType) GetEventNameOk() (*string, bool)`

GetEventNameOk returns a tuple with the EventName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventName

`func (o *CateringEventItemsProcessedInfoType) SetEventName(v string)`

SetEventName sets EventName field to given value.

### HasEventName

`func (o *CateringEventItemsProcessedInfoType) HasEventName() bool`

HasEventName returns a boolean if a field has been set.

### GetItemName

`func (o *CateringEventItemsProcessedInfoType) GetItemName() string`

GetItemName returns the ItemName field if non-nil, zero value otherwise.

### GetItemNameOk

`func (o *CateringEventItemsProcessedInfoType) GetItemNameOk() (*string, bool)`

GetItemNameOk returns a tuple with the ItemName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemName

`func (o *CateringEventItemsProcessedInfoType) SetItemName(v string)`

SetItemName sets ItemName field to given value.

### HasItemName

`func (o *CateringEventItemsProcessedInfoType) HasItemName() bool`

HasItemName returns a boolean if a field has been set.

### GetQuantity

`func (o *CateringEventItemsProcessedInfoType) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *CateringEventItemsProcessedInfoType) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *CateringEventItemsProcessedInfoType) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *CateringEventItemsProcessedInfoType) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### GetInternalQty

`func (o *CateringEventItemsProcessedInfoType) GetInternalQty() int32`

GetInternalQty returns the InternalQty field if non-nil, zero value otherwise.

### GetInternalQtyOk

`func (o *CateringEventItemsProcessedInfoType) GetInternalQtyOk() (*int32, bool)`

GetInternalQtyOk returns a tuple with the InternalQty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternalQty

`func (o *CateringEventItemsProcessedInfoType) SetInternalQty(v int32)`

SetInternalQty sets InternalQty field to given value.

### HasInternalQty

`func (o *CateringEventItemsProcessedInfoType) HasInternalQty() bool`

HasInternalQty returns a boolean if a field has been set.

### GetExternalQty

`func (o *CateringEventItemsProcessedInfoType) GetExternalQty() int32`

GetExternalQty returns the ExternalQty field if non-nil, zero value otherwise.

### GetExternalQtyOk

`func (o *CateringEventItemsProcessedInfoType) GetExternalQtyOk() (*int32, bool)`

GetExternalQtyOk returns a tuple with the ExternalQty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalQty

`func (o *CateringEventItemsProcessedInfoType) SetExternalQty(v int32)`

SetExternalQty sets ExternalQty field to given value.

### HasExternalQty

`func (o *CateringEventItemsProcessedInfoType) HasExternalQty() bool`

HasExternalQty returns a boolean if a field has been set.

### GetStatus

`func (o *CateringEventItemsProcessedInfoType) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CateringEventItemsProcessedInfoType) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CateringEventItemsProcessedInfoType) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *CateringEventItemsProcessedInfoType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetReason

`func (o *CateringEventItemsProcessedInfoType) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *CateringEventItemsProcessedInfoType) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *CateringEventItemsProcessedInfoType) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *CateringEventItemsProcessedInfoType) HasReason() bool`

HasReason returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


