# HousekeepingCreditRuleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Code where housekeeping credit rule belongs to. | [optional] 
**RuleCode** | Pointer to **string** | Rule Code of housekeeping credit rule. | [optional] 
**RuleType** | Pointer to [**HousekeepingCreditRuleTypeType**](HousekeepingCreditRuleTypeType.md) |  | [optional] 
**Description** | Pointer to **string** | Description of housekeeping credit rule. | [optional] 
**FacilityTaskRule** | Pointer to [**HousekeepingCreditRuleTypeFacilityTaskRule**](HousekeepingCreditRuleTypeFacilityTaskRule.md) |  | [optional] 
**Special** | Pointer to **string** | When RuleType is set to Special, specifies which special makes this credit rule applicable. For example, the credit value will be added to the task assignment sheet when the assigned room has this specific special applied to the reservation. | [optional] 
**TravelType** | Pointer to [**HousekeepingCreditRuleTravelTypeType**](HousekeepingCreditRuleTravelTypeType.md) |  | [optional] 
**CreditValue** | Pointer to **float32** | The additional credits which are applied to the task assignment sheet when the rule criteria has been met. | [optional] 
**Buildings** | Pointer to **[]string** |  | [optional] 
**DaysOfWeek** | Pointer to [**TimeSpanDaysOfWeekType**](TimeSpanDaysOfWeekType.md) |  | [optional] 
**Inactive** | Pointer to **bool** | Indicates if the Housekeeping Credit Rule is inactive. | [optional] 
**ItemInventory** | Pointer to **string** | When RuleType is set to Item Inventory, specifies which item inventory makes this credit rule applicable. For example, the credit value will be added to the task assignment sheet when the assigned room has this specific item inventory applied to the reservation. | [optional] 

## Methods

### NewHousekeepingCreditRuleType

`func NewHousekeepingCreditRuleType() *HousekeepingCreditRuleType`

NewHousekeepingCreditRuleType instantiates a new HousekeepingCreditRuleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingCreditRuleTypeWithDefaults

`func NewHousekeepingCreditRuleTypeWithDefaults() *HousekeepingCreditRuleType`

NewHousekeepingCreditRuleTypeWithDefaults instantiates a new HousekeepingCreditRuleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *HousekeepingCreditRuleType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HousekeepingCreditRuleType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HousekeepingCreditRuleType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HousekeepingCreditRuleType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRuleCode

`func (o *HousekeepingCreditRuleType) GetRuleCode() string`

GetRuleCode returns the RuleCode field if non-nil, zero value otherwise.

### GetRuleCodeOk

`func (o *HousekeepingCreditRuleType) GetRuleCodeOk() (*string, bool)`

GetRuleCodeOk returns a tuple with the RuleCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleCode

`func (o *HousekeepingCreditRuleType) SetRuleCode(v string)`

SetRuleCode sets RuleCode field to given value.

### HasRuleCode

`func (o *HousekeepingCreditRuleType) HasRuleCode() bool`

HasRuleCode returns a boolean if a field has been set.

### GetRuleType

`func (o *HousekeepingCreditRuleType) GetRuleType() HousekeepingCreditRuleTypeType`

GetRuleType returns the RuleType field if non-nil, zero value otherwise.

### GetRuleTypeOk

`func (o *HousekeepingCreditRuleType) GetRuleTypeOk() (*HousekeepingCreditRuleTypeType, bool)`

GetRuleTypeOk returns a tuple with the RuleType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleType

`func (o *HousekeepingCreditRuleType) SetRuleType(v HousekeepingCreditRuleTypeType)`

SetRuleType sets RuleType field to given value.

### HasRuleType

`func (o *HousekeepingCreditRuleType) HasRuleType() bool`

HasRuleType returns a boolean if a field has been set.

### GetDescription

`func (o *HousekeepingCreditRuleType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *HousekeepingCreditRuleType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *HousekeepingCreditRuleType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *HousekeepingCreditRuleType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetFacilityTaskRule

`func (o *HousekeepingCreditRuleType) GetFacilityTaskRule() HousekeepingCreditRuleTypeFacilityTaskRule`

GetFacilityTaskRule returns the FacilityTaskRule field if non-nil, zero value otherwise.

### GetFacilityTaskRuleOk

`func (o *HousekeepingCreditRuleType) GetFacilityTaskRuleOk() (*HousekeepingCreditRuleTypeFacilityTaskRule, bool)`

GetFacilityTaskRuleOk returns a tuple with the FacilityTaskRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFacilityTaskRule

`func (o *HousekeepingCreditRuleType) SetFacilityTaskRule(v HousekeepingCreditRuleTypeFacilityTaskRule)`

SetFacilityTaskRule sets FacilityTaskRule field to given value.

### HasFacilityTaskRule

`func (o *HousekeepingCreditRuleType) HasFacilityTaskRule() bool`

HasFacilityTaskRule returns a boolean if a field has been set.

### GetSpecial

`func (o *HousekeepingCreditRuleType) GetSpecial() string`

GetSpecial returns the Special field if non-nil, zero value otherwise.

### GetSpecialOk

`func (o *HousekeepingCreditRuleType) GetSpecialOk() (*string, bool)`

GetSpecialOk returns a tuple with the Special field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpecial

`func (o *HousekeepingCreditRuleType) SetSpecial(v string)`

SetSpecial sets Special field to given value.

### HasSpecial

`func (o *HousekeepingCreditRuleType) HasSpecial() bool`

HasSpecial returns a boolean if a field has been set.

### GetTravelType

`func (o *HousekeepingCreditRuleType) GetTravelType() HousekeepingCreditRuleTravelTypeType`

GetTravelType returns the TravelType field if non-nil, zero value otherwise.

### GetTravelTypeOk

`func (o *HousekeepingCreditRuleType) GetTravelTypeOk() (*HousekeepingCreditRuleTravelTypeType, bool)`

GetTravelTypeOk returns a tuple with the TravelType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTravelType

`func (o *HousekeepingCreditRuleType) SetTravelType(v HousekeepingCreditRuleTravelTypeType)`

SetTravelType sets TravelType field to given value.

### HasTravelType

`func (o *HousekeepingCreditRuleType) HasTravelType() bool`

HasTravelType returns a boolean if a field has been set.

### GetCreditValue

`func (o *HousekeepingCreditRuleType) GetCreditValue() float32`

GetCreditValue returns the CreditValue field if non-nil, zero value otherwise.

### GetCreditValueOk

`func (o *HousekeepingCreditRuleType) GetCreditValueOk() (*float32, bool)`

GetCreditValueOk returns a tuple with the CreditValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditValue

`func (o *HousekeepingCreditRuleType) SetCreditValue(v float32)`

SetCreditValue sets CreditValue field to given value.

### HasCreditValue

`func (o *HousekeepingCreditRuleType) HasCreditValue() bool`

HasCreditValue returns a boolean if a field has been set.

### GetBuildings

`func (o *HousekeepingCreditRuleType) GetBuildings() []string`

GetBuildings returns the Buildings field if non-nil, zero value otherwise.

### GetBuildingsOk

`func (o *HousekeepingCreditRuleType) GetBuildingsOk() (*[]string, bool)`

GetBuildingsOk returns a tuple with the Buildings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBuildings

`func (o *HousekeepingCreditRuleType) SetBuildings(v []string)`

SetBuildings sets Buildings field to given value.

### HasBuildings

`func (o *HousekeepingCreditRuleType) HasBuildings() bool`

HasBuildings returns a boolean if a field has been set.

### GetDaysOfWeek

`func (o *HousekeepingCreditRuleType) GetDaysOfWeek() TimeSpanDaysOfWeekType`

GetDaysOfWeek returns the DaysOfWeek field if non-nil, zero value otherwise.

### GetDaysOfWeekOk

`func (o *HousekeepingCreditRuleType) GetDaysOfWeekOk() (*TimeSpanDaysOfWeekType, bool)`

GetDaysOfWeekOk returns a tuple with the DaysOfWeek field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaysOfWeek

`func (o *HousekeepingCreditRuleType) SetDaysOfWeek(v TimeSpanDaysOfWeekType)`

SetDaysOfWeek sets DaysOfWeek field to given value.

### HasDaysOfWeek

`func (o *HousekeepingCreditRuleType) HasDaysOfWeek() bool`

HasDaysOfWeek returns a boolean if a field has been set.

### GetInactive

`func (o *HousekeepingCreditRuleType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *HousekeepingCreditRuleType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *HousekeepingCreditRuleType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *HousekeepingCreditRuleType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetItemInventory

`func (o *HousekeepingCreditRuleType) GetItemInventory() string`

GetItemInventory returns the ItemInventory field if non-nil, zero value otherwise.

### GetItemInventoryOk

`func (o *HousekeepingCreditRuleType) GetItemInventoryOk() (*string, bool)`

GetItemInventoryOk returns a tuple with the ItemInventory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemInventory

`func (o *HousekeepingCreditRuleType) SetItemInventory(v string)`

SetItemInventory sets ItemInventory field to given value.

### HasItemInventory

`func (o *HousekeepingCreditRuleType) HasItemInventory() bool`

HasItemInventory returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


