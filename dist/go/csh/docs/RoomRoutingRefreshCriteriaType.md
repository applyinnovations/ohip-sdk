# RoomRoutingRefreshCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FromBothResvs** | Pointer to **bool** | Flag to indicate whether to fetch transaction from both reservations. | [optional] 
**HotelId** | Pointer to **string** | Property code where the routing instruction set exists. | [optional] 
**Instructions** | Pointer to [**RoutingInstructionType**](RoutingInstructionType.md) |  | [optional] 
**OriginalTargetResvNameId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ResvNameId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Status** | Pointer to [**RoutingInstructionStatusType**](RoutingInstructionStatusType.md) |  | [optional] 
**TargetResvNameId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Transactions** | Pointer to **[]float32** | Unique Transaction Number of the transaction(posting) which need to be transferred. | [optional] 

## Methods

### NewRoomRoutingRefreshCriteriaType

`func NewRoomRoutingRefreshCriteriaType() *RoomRoutingRefreshCriteriaType`

NewRoomRoutingRefreshCriteriaType instantiates a new RoomRoutingRefreshCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomRoutingRefreshCriteriaTypeWithDefaults

`func NewRoomRoutingRefreshCriteriaTypeWithDefaults() *RoomRoutingRefreshCriteriaType`

NewRoomRoutingRefreshCriteriaTypeWithDefaults instantiates a new RoomRoutingRefreshCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFromBothResvs

`func (o *RoomRoutingRefreshCriteriaType) GetFromBothResvs() bool`

GetFromBothResvs returns the FromBothResvs field if non-nil, zero value otherwise.

### GetFromBothResvsOk

`func (o *RoomRoutingRefreshCriteriaType) GetFromBothResvsOk() (*bool, bool)`

GetFromBothResvsOk returns a tuple with the FromBothResvs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromBothResvs

`func (o *RoomRoutingRefreshCriteriaType) SetFromBothResvs(v bool)`

SetFromBothResvs sets FromBothResvs field to given value.

### HasFromBothResvs

`func (o *RoomRoutingRefreshCriteriaType) HasFromBothResvs() bool`

HasFromBothResvs returns a boolean if a field has been set.

### GetHotelId

`func (o *RoomRoutingRefreshCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RoomRoutingRefreshCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RoomRoutingRefreshCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RoomRoutingRefreshCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInstructions

`func (o *RoomRoutingRefreshCriteriaType) GetInstructions() RoutingInstructionType`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *RoomRoutingRefreshCriteriaType) GetInstructionsOk() (*RoutingInstructionType, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *RoomRoutingRefreshCriteriaType) SetInstructions(v RoutingInstructionType)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *RoomRoutingRefreshCriteriaType) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.

### GetOriginalTargetResvNameId

`func (o *RoomRoutingRefreshCriteriaType) GetOriginalTargetResvNameId() UniqueIDType`

GetOriginalTargetResvNameId returns the OriginalTargetResvNameId field if non-nil, zero value otherwise.

### GetOriginalTargetResvNameIdOk

`func (o *RoomRoutingRefreshCriteriaType) GetOriginalTargetResvNameIdOk() (*UniqueIDType, bool)`

GetOriginalTargetResvNameIdOk returns a tuple with the OriginalTargetResvNameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginalTargetResvNameId

`func (o *RoomRoutingRefreshCriteriaType) SetOriginalTargetResvNameId(v UniqueIDType)`

SetOriginalTargetResvNameId sets OriginalTargetResvNameId field to given value.

### HasOriginalTargetResvNameId

`func (o *RoomRoutingRefreshCriteriaType) HasOriginalTargetResvNameId() bool`

HasOriginalTargetResvNameId returns a boolean if a field has been set.

### GetResvNameId

`func (o *RoomRoutingRefreshCriteriaType) GetResvNameId() UniqueIDType`

GetResvNameId returns the ResvNameId field if non-nil, zero value otherwise.

### GetResvNameIdOk

`func (o *RoomRoutingRefreshCriteriaType) GetResvNameIdOk() (*UniqueIDType, bool)`

GetResvNameIdOk returns a tuple with the ResvNameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResvNameId

`func (o *RoomRoutingRefreshCriteriaType) SetResvNameId(v UniqueIDType)`

SetResvNameId sets ResvNameId field to given value.

### HasResvNameId

`func (o *RoomRoutingRefreshCriteriaType) HasResvNameId() bool`

HasResvNameId returns a boolean if a field has been set.

### GetStatus

`func (o *RoomRoutingRefreshCriteriaType) GetStatus() RoutingInstructionStatusType`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *RoomRoutingRefreshCriteriaType) GetStatusOk() (*RoutingInstructionStatusType, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *RoomRoutingRefreshCriteriaType) SetStatus(v RoutingInstructionStatusType)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *RoomRoutingRefreshCriteriaType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTargetResvNameId

`func (o *RoomRoutingRefreshCriteriaType) GetTargetResvNameId() UniqueIDType`

GetTargetResvNameId returns the TargetResvNameId field if non-nil, zero value otherwise.

### GetTargetResvNameIdOk

`func (o *RoomRoutingRefreshCriteriaType) GetTargetResvNameIdOk() (*UniqueIDType, bool)`

GetTargetResvNameIdOk returns a tuple with the TargetResvNameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetResvNameId

`func (o *RoomRoutingRefreshCriteriaType) SetTargetResvNameId(v UniqueIDType)`

SetTargetResvNameId sets TargetResvNameId field to given value.

### HasTargetResvNameId

`func (o *RoomRoutingRefreshCriteriaType) HasTargetResvNameId() bool`

HasTargetResvNameId returns a boolean if a field has been set.

### GetTransactions

`func (o *RoomRoutingRefreshCriteriaType) GetTransactions() []float32`

GetTransactions returns the Transactions field if non-nil, zero value otherwise.

### GetTransactionsOk

`func (o *RoomRoutingRefreshCriteriaType) GetTransactionsOk() (*[]float32, bool)`

GetTransactionsOk returns a tuple with the Transactions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactions

`func (o *RoomRoutingRefreshCriteriaType) SetTransactions(v []float32)`

SetTransactions sets Transactions field to given value.

### HasTransactions

`func (o *RoomRoutingRefreshCriteriaType) HasTransactions() bool`

HasTransactions returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


