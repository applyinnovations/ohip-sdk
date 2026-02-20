# CheckPostBillingChargesOptionsTypeInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Consumable** | Pointer to [**ChargeCriteriaType**](ChargeCriteriaType.md) |  | [optional] 
**PackageAllowance** | Pointer to **bool** | Determines if the package allowance is available to be consumed. | [optional] 
**RoomRouting** | Pointer to [**CheckPostBillingChargesOptionsTypeInnerRoomRouting**](CheckPostBillingChargesOptionsTypeInnerRoomRouting.md) |  | [optional] 

## Methods

### NewCheckPostBillingChargesOptionsTypeInner

`func NewCheckPostBillingChargesOptionsTypeInner() *CheckPostBillingChargesOptionsTypeInner`

NewCheckPostBillingChargesOptionsTypeInner instantiates a new CheckPostBillingChargesOptionsTypeInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCheckPostBillingChargesOptionsTypeInnerWithDefaults

`func NewCheckPostBillingChargesOptionsTypeInnerWithDefaults() *CheckPostBillingChargesOptionsTypeInner`

NewCheckPostBillingChargesOptionsTypeInnerWithDefaults instantiates a new CheckPostBillingChargesOptionsTypeInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConsumable

`func (o *CheckPostBillingChargesOptionsTypeInner) GetConsumable() ChargeCriteriaType`

GetConsumable returns the Consumable field if non-nil, zero value otherwise.

### GetConsumableOk

`func (o *CheckPostBillingChargesOptionsTypeInner) GetConsumableOk() (*ChargeCriteriaType, bool)`

GetConsumableOk returns a tuple with the Consumable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConsumable

`func (o *CheckPostBillingChargesOptionsTypeInner) SetConsumable(v ChargeCriteriaType)`

SetConsumable sets Consumable field to given value.

### HasConsumable

`func (o *CheckPostBillingChargesOptionsTypeInner) HasConsumable() bool`

HasConsumable returns a boolean if a field has been set.

### GetPackageAllowance

`func (o *CheckPostBillingChargesOptionsTypeInner) GetPackageAllowance() bool`

GetPackageAllowance returns the PackageAllowance field if non-nil, zero value otherwise.

### GetPackageAllowanceOk

`func (o *CheckPostBillingChargesOptionsTypeInner) GetPackageAllowanceOk() (*bool, bool)`

GetPackageAllowanceOk returns a tuple with the PackageAllowance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageAllowance

`func (o *CheckPostBillingChargesOptionsTypeInner) SetPackageAllowance(v bool)`

SetPackageAllowance sets PackageAllowance field to given value.

### HasPackageAllowance

`func (o *CheckPostBillingChargesOptionsTypeInner) HasPackageAllowance() bool`

HasPackageAllowance returns a boolean if a field has been set.

### GetRoomRouting

`func (o *CheckPostBillingChargesOptionsTypeInner) GetRoomRouting() CheckPostBillingChargesOptionsTypeInnerRoomRouting`

GetRoomRouting returns the RoomRouting field if non-nil, zero value otherwise.

### GetRoomRoutingOk

`func (o *CheckPostBillingChargesOptionsTypeInner) GetRoomRoutingOk() (*CheckPostBillingChargesOptionsTypeInnerRoomRouting, bool)`

GetRoomRoutingOk returns a tuple with the RoomRouting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomRouting

`func (o *CheckPostBillingChargesOptionsTypeInner) SetRoomRouting(v CheckPostBillingChargesOptionsTypeInnerRoomRouting)`

SetRoomRouting sets RoomRouting field to given value.

### HasRoomRouting

`func (o *CheckPostBillingChargesOptionsTypeInner) HasRoomRouting() bool`

HasRoomRouting returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


