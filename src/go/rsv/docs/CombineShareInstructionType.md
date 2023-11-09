# CombineShareInstructionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DistributionType** | Pointer to [**ShareDistributionInstructionType**](ShareDistributionInstructionType.md) |  | [optional] 
**EffectiveRates** | Pointer to [**EffectiveRatesType**](EffectiveRatesType.md) |  | [optional] 
**OverrideInstruction** | Pointer to [**OverrideInstructionType**](OverrideInstructionType.md) |  | [optional] 
**OverrideInventoryCheck** | Pointer to **bool** | Indicate to override the room inventory check if applicable. | [optional] 
**OverrideMaxOccupancyCheck** | Pointer to **bool** | Indicate to override the check on maximum room occupancy if applicable. | [optional] 
**RateChangeInstruction** | Pointer to [**RateChangeInstructionType**](RateChangeInstructionType.md) |  | [optional] 
**RoomMoveCheckedinResv** | Pointer to **bool** | If the joining sharer is checked in, do a room move to the main sharer&#39;s room. | [optional] 

## Methods

### NewCombineShareInstructionType

`func NewCombineShareInstructionType() *CombineShareInstructionType`

NewCombineShareInstructionType instantiates a new CombineShareInstructionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCombineShareInstructionTypeWithDefaults

`func NewCombineShareInstructionTypeWithDefaults() *CombineShareInstructionType`

NewCombineShareInstructionTypeWithDefaults instantiates a new CombineShareInstructionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDistributionType

`func (o *CombineShareInstructionType) GetDistributionType() ShareDistributionInstructionType`

GetDistributionType returns the DistributionType field if non-nil, zero value otherwise.

### GetDistributionTypeOk

`func (o *CombineShareInstructionType) GetDistributionTypeOk() (*ShareDistributionInstructionType, bool)`

GetDistributionTypeOk returns a tuple with the DistributionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDistributionType

`func (o *CombineShareInstructionType) SetDistributionType(v ShareDistributionInstructionType)`

SetDistributionType sets DistributionType field to given value.

### HasDistributionType

`func (o *CombineShareInstructionType) HasDistributionType() bool`

HasDistributionType returns a boolean if a field has been set.

### GetEffectiveRates

`func (o *CombineShareInstructionType) GetEffectiveRates() EffectiveRatesType`

GetEffectiveRates returns the EffectiveRates field if non-nil, zero value otherwise.

### GetEffectiveRatesOk

`func (o *CombineShareInstructionType) GetEffectiveRatesOk() (*EffectiveRatesType, bool)`

GetEffectiveRatesOk returns a tuple with the EffectiveRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffectiveRates

`func (o *CombineShareInstructionType) SetEffectiveRates(v EffectiveRatesType)`

SetEffectiveRates sets EffectiveRates field to given value.

### HasEffectiveRates

`func (o *CombineShareInstructionType) HasEffectiveRates() bool`

HasEffectiveRates returns a boolean if a field has been set.

### GetOverrideInstruction

`func (o *CombineShareInstructionType) GetOverrideInstruction() OverrideInstructionType`

GetOverrideInstruction returns the OverrideInstruction field if non-nil, zero value otherwise.

### GetOverrideInstructionOk

`func (o *CombineShareInstructionType) GetOverrideInstructionOk() (*OverrideInstructionType, bool)`

GetOverrideInstructionOk returns a tuple with the OverrideInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideInstruction

`func (o *CombineShareInstructionType) SetOverrideInstruction(v OverrideInstructionType)`

SetOverrideInstruction sets OverrideInstruction field to given value.

### HasOverrideInstruction

`func (o *CombineShareInstructionType) HasOverrideInstruction() bool`

HasOverrideInstruction returns a boolean if a field has been set.

### GetOverrideInventoryCheck

`func (o *CombineShareInstructionType) GetOverrideInventoryCheck() bool`

GetOverrideInventoryCheck returns the OverrideInventoryCheck field if non-nil, zero value otherwise.

### GetOverrideInventoryCheckOk

`func (o *CombineShareInstructionType) GetOverrideInventoryCheckOk() (*bool, bool)`

GetOverrideInventoryCheckOk returns a tuple with the OverrideInventoryCheck field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideInventoryCheck

`func (o *CombineShareInstructionType) SetOverrideInventoryCheck(v bool)`

SetOverrideInventoryCheck sets OverrideInventoryCheck field to given value.

### HasOverrideInventoryCheck

`func (o *CombineShareInstructionType) HasOverrideInventoryCheck() bool`

HasOverrideInventoryCheck returns a boolean if a field has been set.

### GetOverrideMaxOccupancyCheck

`func (o *CombineShareInstructionType) GetOverrideMaxOccupancyCheck() bool`

GetOverrideMaxOccupancyCheck returns the OverrideMaxOccupancyCheck field if non-nil, zero value otherwise.

### GetOverrideMaxOccupancyCheckOk

`func (o *CombineShareInstructionType) GetOverrideMaxOccupancyCheckOk() (*bool, bool)`

GetOverrideMaxOccupancyCheckOk returns a tuple with the OverrideMaxOccupancyCheck field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideMaxOccupancyCheck

`func (o *CombineShareInstructionType) SetOverrideMaxOccupancyCheck(v bool)`

SetOverrideMaxOccupancyCheck sets OverrideMaxOccupancyCheck field to given value.

### HasOverrideMaxOccupancyCheck

`func (o *CombineShareInstructionType) HasOverrideMaxOccupancyCheck() bool`

HasOverrideMaxOccupancyCheck returns a boolean if a field has been set.

### GetRateChangeInstruction

`func (o *CombineShareInstructionType) GetRateChangeInstruction() RateChangeInstructionType`

GetRateChangeInstruction returns the RateChangeInstruction field if non-nil, zero value otherwise.

### GetRateChangeInstructionOk

`func (o *CombineShareInstructionType) GetRateChangeInstructionOk() (*RateChangeInstructionType, bool)`

GetRateChangeInstructionOk returns a tuple with the RateChangeInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateChangeInstruction

`func (o *CombineShareInstructionType) SetRateChangeInstruction(v RateChangeInstructionType)`

SetRateChangeInstruction sets RateChangeInstruction field to given value.

### HasRateChangeInstruction

`func (o *CombineShareInstructionType) HasRateChangeInstruction() bool`

HasRateChangeInstruction returns a boolean if a field has been set.

### GetRoomMoveCheckedinResv

`func (o *CombineShareInstructionType) GetRoomMoveCheckedinResv() bool`

GetRoomMoveCheckedinResv returns the RoomMoveCheckedinResv field if non-nil, zero value otherwise.

### GetRoomMoveCheckedinResvOk

`func (o *CombineShareInstructionType) GetRoomMoveCheckedinResvOk() (*bool, bool)`

GetRoomMoveCheckedinResvOk returns a tuple with the RoomMoveCheckedinResv field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomMoveCheckedinResv

`func (o *CombineShareInstructionType) SetRoomMoveCheckedinResv(v bool)`

SetRoomMoveCheckedinResv sets RoomMoveCheckedinResv field to given value.

### HasRoomMoveCheckedinResv

`func (o *CombineShareInstructionType) HasRoomMoveCheckedinResv() bool`

HasRoomMoveCheckedinResv returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


