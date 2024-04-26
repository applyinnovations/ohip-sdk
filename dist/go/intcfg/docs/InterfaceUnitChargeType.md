# InterfaceUnitChargeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TrunkId** | Pointer to **string** | Trunk ID of the CAS or PBX. | [optional] 
**LineType** | Pointer to **string** | Line Types setup in IFC_ROOM table. | [optional] 
**VipCode** | Pointer to **string** | Guest VIP Code. | [optional] 
**StartUnit** | Pointer to **int32** | Starting number of units for the unit range. | [optional] 
**EndUnit** | Pointer to **int32** | Ending number of units for the unit range. | [optional] 
**PricePerUnit** | Pointer to **int32** | Amount charged per unit. | [optional] 

## Methods

### NewInterfaceUnitChargeType

`func NewInterfaceUnitChargeType() *InterfaceUnitChargeType`

NewInterfaceUnitChargeType instantiates a new InterfaceUnitChargeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInterfaceUnitChargeTypeWithDefaults

`func NewInterfaceUnitChargeTypeWithDefaults() *InterfaceUnitChargeType`

NewInterfaceUnitChargeTypeWithDefaults instantiates a new InterfaceUnitChargeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTrunkId

`func (o *InterfaceUnitChargeType) GetTrunkId() string`

GetTrunkId returns the TrunkId field if non-nil, zero value otherwise.

### GetTrunkIdOk

`func (o *InterfaceUnitChargeType) GetTrunkIdOk() (*string, bool)`

GetTrunkIdOk returns a tuple with the TrunkId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrunkId

`func (o *InterfaceUnitChargeType) SetTrunkId(v string)`

SetTrunkId sets TrunkId field to given value.

### HasTrunkId

`func (o *InterfaceUnitChargeType) HasTrunkId() bool`

HasTrunkId returns a boolean if a field has been set.

### GetLineType

`func (o *InterfaceUnitChargeType) GetLineType() string`

GetLineType returns the LineType field if non-nil, zero value otherwise.

### GetLineTypeOk

`func (o *InterfaceUnitChargeType) GetLineTypeOk() (*string, bool)`

GetLineTypeOk returns a tuple with the LineType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLineType

`func (o *InterfaceUnitChargeType) SetLineType(v string)`

SetLineType sets LineType field to given value.

### HasLineType

`func (o *InterfaceUnitChargeType) HasLineType() bool`

HasLineType returns a boolean if a field has been set.

### GetVipCode

`func (o *InterfaceUnitChargeType) GetVipCode() string`

GetVipCode returns the VipCode field if non-nil, zero value otherwise.

### GetVipCodeOk

`func (o *InterfaceUnitChargeType) GetVipCodeOk() (*string, bool)`

GetVipCodeOk returns a tuple with the VipCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVipCode

`func (o *InterfaceUnitChargeType) SetVipCode(v string)`

SetVipCode sets VipCode field to given value.

### HasVipCode

`func (o *InterfaceUnitChargeType) HasVipCode() bool`

HasVipCode returns a boolean if a field has been set.

### GetStartUnit

`func (o *InterfaceUnitChargeType) GetStartUnit() int32`

GetStartUnit returns the StartUnit field if non-nil, zero value otherwise.

### GetStartUnitOk

`func (o *InterfaceUnitChargeType) GetStartUnitOk() (*int32, bool)`

GetStartUnitOk returns a tuple with the StartUnit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartUnit

`func (o *InterfaceUnitChargeType) SetStartUnit(v int32)`

SetStartUnit sets StartUnit field to given value.

### HasStartUnit

`func (o *InterfaceUnitChargeType) HasStartUnit() bool`

HasStartUnit returns a boolean if a field has been set.

### GetEndUnit

`func (o *InterfaceUnitChargeType) GetEndUnit() int32`

GetEndUnit returns the EndUnit field if non-nil, zero value otherwise.

### GetEndUnitOk

`func (o *InterfaceUnitChargeType) GetEndUnitOk() (*int32, bool)`

GetEndUnitOk returns a tuple with the EndUnit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndUnit

`func (o *InterfaceUnitChargeType) SetEndUnit(v int32)`

SetEndUnit sets EndUnit field to given value.

### HasEndUnit

`func (o *InterfaceUnitChargeType) HasEndUnit() bool`

HasEndUnit returns a boolean if a field has been set.

### GetPricePerUnit

`func (o *InterfaceUnitChargeType) GetPricePerUnit() int32`

GetPricePerUnit returns the PricePerUnit field if non-nil, zero value otherwise.

### GetPricePerUnitOk

`func (o *InterfaceUnitChargeType) GetPricePerUnitOk() (*int32, bool)`

GetPricePerUnitOk returns a tuple with the PricePerUnit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPricePerUnit

`func (o *InterfaceUnitChargeType) SetPricePerUnit(v int32)`

SetPricePerUnit sets PricePerUnit field to given value.

### HasPricePerUnit

`func (o *InterfaceUnitChargeType) HasPricePerUnit() bool`

HasPricePerUnit returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


