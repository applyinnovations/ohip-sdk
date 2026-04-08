# BlockAvailabilityRoomInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Inventory** | Pointer to **int32** | Total occupancy allotted for the room type and stay date. | [optional] 
**Rate** | Pointer to **float32** | The derived rate amount for the room type, stay date and number of adults. | [optional] 
**RoomType** | Pointer to **string** |  | [optional] 
**RoomTypeAttributes** | Pointer to [**RoomTypeAttributesType**](RoomTypeAttributesType.md) |  | [optional] 
**SellLimit** | Pointer to **int32** | Available Sell Limit rooms for a Sell Limit block. | [optional] 
**Package** | Pointer to **float32** | Amount of an additional product or service that is sold as part of the rate or in addition to the rate. | [optional] 
**Tax** | Pointer to **float32** | Amount of tax generated separately on the revenue and package. | [optional] 
**Gross** | Pointer to **float32** | Amount of revenue and package excluding tax. | [optional] 
**Net** | Pointer to **float32** | Amount of revenue and package including tax. | [optional] 
**DepositPolicy** | Pointer to [**DepositPolicyType**](DepositPolicyType.md) |  | [optional] 
**CancelPenalty** | Pointer to [**CancelPenaltyType**](CancelPenaltyType.md) |  | [optional] 

## Methods

### NewBlockAvailabilityRoomInfoType

`func NewBlockAvailabilityRoomInfoType() *BlockAvailabilityRoomInfoType`

NewBlockAvailabilityRoomInfoType instantiates a new BlockAvailabilityRoomInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockAvailabilityRoomInfoTypeWithDefaults

`func NewBlockAvailabilityRoomInfoTypeWithDefaults() *BlockAvailabilityRoomInfoType`

NewBlockAvailabilityRoomInfoTypeWithDefaults instantiates a new BlockAvailabilityRoomInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInventory

`func (o *BlockAvailabilityRoomInfoType) GetInventory() int32`

GetInventory returns the Inventory field if non-nil, zero value otherwise.

### GetInventoryOk

`func (o *BlockAvailabilityRoomInfoType) GetInventoryOk() (*int32, bool)`

GetInventoryOk returns a tuple with the Inventory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventory

`func (o *BlockAvailabilityRoomInfoType) SetInventory(v int32)`

SetInventory sets Inventory field to given value.

### HasInventory

`func (o *BlockAvailabilityRoomInfoType) HasInventory() bool`

HasInventory returns a boolean if a field has been set.

### GetRate

`func (o *BlockAvailabilityRoomInfoType) GetRate() float32`

GetRate returns the Rate field if non-nil, zero value otherwise.

### GetRateOk

`func (o *BlockAvailabilityRoomInfoType) GetRateOk() (*float32, bool)`

GetRateOk returns a tuple with the Rate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRate

`func (o *BlockAvailabilityRoomInfoType) SetRate(v float32)`

SetRate sets Rate field to given value.

### HasRate

`func (o *BlockAvailabilityRoomInfoType) HasRate() bool`

HasRate returns a boolean if a field has been set.

### GetRoomType

`func (o *BlockAvailabilityRoomInfoType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *BlockAvailabilityRoomInfoType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *BlockAvailabilityRoomInfoType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *BlockAvailabilityRoomInfoType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetRoomTypeAttributes

`func (o *BlockAvailabilityRoomInfoType) GetRoomTypeAttributes() RoomTypeAttributesType`

GetRoomTypeAttributes returns the RoomTypeAttributes field if non-nil, zero value otherwise.

### GetRoomTypeAttributesOk

`func (o *BlockAvailabilityRoomInfoType) GetRoomTypeAttributesOk() (*RoomTypeAttributesType, bool)`

GetRoomTypeAttributesOk returns a tuple with the RoomTypeAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypeAttributes

`func (o *BlockAvailabilityRoomInfoType) SetRoomTypeAttributes(v RoomTypeAttributesType)`

SetRoomTypeAttributes sets RoomTypeAttributes field to given value.

### HasRoomTypeAttributes

`func (o *BlockAvailabilityRoomInfoType) HasRoomTypeAttributes() bool`

HasRoomTypeAttributes returns a boolean if a field has been set.

### GetSellLimit

`func (o *BlockAvailabilityRoomInfoType) GetSellLimit() int32`

GetSellLimit returns the SellLimit field if non-nil, zero value otherwise.

### GetSellLimitOk

`func (o *BlockAvailabilityRoomInfoType) GetSellLimitOk() (*int32, bool)`

GetSellLimitOk returns a tuple with the SellLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellLimit

`func (o *BlockAvailabilityRoomInfoType) SetSellLimit(v int32)`

SetSellLimit sets SellLimit field to given value.

### HasSellLimit

`func (o *BlockAvailabilityRoomInfoType) HasSellLimit() bool`

HasSellLimit returns a boolean if a field has been set.

### GetPackage

`func (o *BlockAvailabilityRoomInfoType) GetPackage() float32`

GetPackage returns the Package field if non-nil, zero value otherwise.

### GetPackageOk

`func (o *BlockAvailabilityRoomInfoType) GetPackageOk() (*float32, bool)`

GetPackageOk returns a tuple with the Package field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackage

`func (o *BlockAvailabilityRoomInfoType) SetPackage(v float32)`

SetPackage sets Package field to given value.

### HasPackage

`func (o *BlockAvailabilityRoomInfoType) HasPackage() bool`

HasPackage returns a boolean if a field has been set.

### GetTax

`func (o *BlockAvailabilityRoomInfoType) GetTax() float32`

GetTax returns the Tax field if non-nil, zero value otherwise.

### GetTaxOk

`func (o *BlockAvailabilityRoomInfoType) GetTaxOk() (*float32, bool)`

GetTaxOk returns a tuple with the Tax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTax

`func (o *BlockAvailabilityRoomInfoType) SetTax(v float32)`

SetTax sets Tax field to given value.

### HasTax

`func (o *BlockAvailabilityRoomInfoType) HasTax() bool`

HasTax returns a boolean if a field has been set.

### GetGross

`func (o *BlockAvailabilityRoomInfoType) GetGross() float32`

GetGross returns the Gross field if non-nil, zero value otherwise.

### GetGrossOk

`func (o *BlockAvailabilityRoomInfoType) GetGrossOk() (*float32, bool)`

GetGrossOk returns a tuple with the Gross field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGross

`func (o *BlockAvailabilityRoomInfoType) SetGross(v float32)`

SetGross sets Gross field to given value.

### HasGross

`func (o *BlockAvailabilityRoomInfoType) HasGross() bool`

HasGross returns a boolean if a field has been set.

### GetNet

`func (o *BlockAvailabilityRoomInfoType) GetNet() float32`

GetNet returns the Net field if non-nil, zero value otherwise.

### GetNetOk

`func (o *BlockAvailabilityRoomInfoType) GetNetOk() (*float32, bool)`

GetNetOk returns a tuple with the Net field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNet

`func (o *BlockAvailabilityRoomInfoType) SetNet(v float32)`

SetNet sets Net field to given value.

### HasNet

`func (o *BlockAvailabilityRoomInfoType) HasNet() bool`

HasNet returns a boolean if a field has been set.

### GetDepositPolicy

`func (o *BlockAvailabilityRoomInfoType) GetDepositPolicy() DepositPolicyType`

GetDepositPolicy returns the DepositPolicy field if non-nil, zero value otherwise.

### GetDepositPolicyOk

`func (o *BlockAvailabilityRoomInfoType) GetDepositPolicyOk() (*DepositPolicyType, bool)`

GetDepositPolicyOk returns a tuple with the DepositPolicy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositPolicy

`func (o *BlockAvailabilityRoomInfoType) SetDepositPolicy(v DepositPolicyType)`

SetDepositPolicy sets DepositPolicy field to given value.

### HasDepositPolicy

`func (o *BlockAvailabilityRoomInfoType) HasDepositPolicy() bool`

HasDepositPolicy returns a boolean if a field has been set.

### GetCancelPenalty

`func (o *BlockAvailabilityRoomInfoType) GetCancelPenalty() CancelPenaltyType`

GetCancelPenalty returns the CancelPenalty field if non-nil, zero value otherwise.

### GetCancelPenaltyOk

`func (o *BlockAvailabilityRoomInfoType) GetCancelPenaltyOk() (*CancelPenaltyType, bool)`

GetCancelPenaltyOk returns a tuple with the CancelPenalty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPenalty

`func (o *BlockAvailabilityRoomInfoType) SetCancelPenalty(v CancelPenaltyType)`

SetCancelPenalty sets CancelPenalty field to given value.

### HasCancelPenalty

`func (o *BlockAvailabilityRoomInfoType) HasCancelPenalty() bool`

HasCancelPenalty returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


