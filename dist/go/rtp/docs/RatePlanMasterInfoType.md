# RatePlanMasterInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdvancedDailyBase** | Pointer to **bool** | Flag to identify if Rate Code is Advanced Daily Base Rate Code | [optional] 
**BARRate** | Pointer to **bool** | Is rate plan code of BAR Rate type? | [optional] 
**Complimentary** | Pointer to **bool** | Is rate plan code Complimentary? | [optional] 
**CurrencyCode** | Pointer to **string** | Currency code used by the rate plan. | [optional] 
**Daily** | Pointer to **bool** | Is rate plan code a daily rate? | [optional] 
**FloorAmount** | Pointer to **float32** | An amount that act as Floor value for Rate Plan. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code of the rate plan. | [optional] 
**HouseUse** | Pointer to **bool** | Is rate plan code for House Use? | [optional] 
**PrimaryDetails** | Pointer to [**RatePlanPrimaryDetailsType**](RatePlanPrimaryDetailsType.md) |  | [optional] 
**RatePlanBasedOnRates** | Pointer to [**[]RatePlanBasedOnRateType**](RatePlanBasedOnRateType.md) | Rate plan type based on rates. | [optional] 
**RatePlanCode** | Pointer to **string** | Rate Plan Code of the rate plan. | [optional] 
**RateTiers** | Pointer to [**[]RateTierType**](RateTierType.md) | Details for each rate tier. | [optional] 
**RoomTypeList** | Pointer to [**[]RateRoomTypeDetailType**](RateRoomTypeDetailType.md) | Details of each room type | [optional] 
**Tiered** | Pointer to **bool** | Is Rate plan tiered? | [optional] 

## Methods

### NewRatePlanMasterInfoType

`func NewRatePlanMasterInfoType() *RatePlanMasterInfoType`

NewRatePlanMasterInfoType instantiates a new RatePlanMasterInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePlanMasterInfoTypeWithDefaults

`func NewRatePlanMasterInfoTypeWithDefaults() *RatePlanMasterInfoType`

NewRatePlanMasterInfoTypeWithDefaults instantiates a new RatePlanMasterInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdvancedDailyBase

`func (o *RatePlanMasterInfoType) GetAdvancedDailyBase() bool`

GetAdvancedDailyBase returns the AdvancedDailyBase field if non-nil, zero value otherwise.

### GetAdvancedDailyBaseOk

`func (o *RatePlanMasterInfoType) GetAdvancedDailyBaseOk() (*bool, bool)`

GetAdvancedDailyBaseOk returns a tuple with the AdvancedDailyBase field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdvancedDailyBase

`func (o *RatePlanMasterInfoType) SetAdvancedDailyBase(v bool)`

SetAdvancedDailyBase sets AdvancedDailyBase field to given value.

### HasAdvancedDailyBase

`func (o *RatePlanMasterInfoType) HasAdvancedDailyBase() bool`

HasAdvancedDailyBase returns a boolean if a field has been set.

### GetBARRate

`func (o *RatePlanMasterInfoType) GetBARRate() bool`

GetBARRate returns the BARRate field if non-nil, zero value otherwise.

### GetBARRateOk

`func (o *RatePlanMasterInfoType) GetBARRateOk() (*bool, bool)`

GetBARRateOk returns a tuple with the BARRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBARRate

`func (o *RatePlanMasterInfoType) SetBARRate(v bool)`

SetBARRate sets BARRate field to given value.

### HasBARRate

`func (o *RatePlanMasterInfoType) HasBARRate() bool`

HasBARRate returns a boolean if a field has been set.

### GetComplimentary

`func (o *RatePlanMasterInfoType) GetComplimentary() bool`

GetComplimentary returns the Complimentary field if non-nil, zero value otherwise.

### GetComplimentaryOk

`func (o *RatePlanMasterInfoType) GetComplimentaryOk() (*bool, bool)`

GetComplimentaryOk returns a tuple with the Complimentary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComplimentary

`func (o *RatePlanMasterInfoType) SetComplimentary(v bool)`

SetComplimentary sets Complimentary field to given value.

### HasComplimentary

`func (o *RatePlanMasterInfoType) HasComplimentary() bool`

HasComplimentary returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *RatePlanMasterInfoType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *RatePlanMasterInfoType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *RatePlanMasterInfoType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *RatePlanMasterInfoType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetDaily

`func (o *RatePlanMasterInfoType) GetDaily() bool`

GetDaily returns the Daily field if non-nil, zero value otherwise.

### GetDailyOk

`func (o *RatePlanMasterInfoType) GetDailyOk() (*bool, bool)`

GetDailyOk returns a tuple with the Daily field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaily

`func (o *RatePlanMasterInfoType) SetDaily(v bool)`

SetDaily sets Daily field to given value.

### HasDaily

`func (o *RatePlanMasterInfoType) HasDaily() bool`

HasDaily returns a boolean if a field has been set.

### GetFloorAmount

`func (o *RatePlanMasterInfoType) GetFloorAmount() float32`

GetFloorAmount returns the FloorAmount field if non-nil, zero value otherwise.

### GetFloorAmountOk

`func (o *RatePlanMasterInfoType) GetFloorAmountOk() (*float32, bool)`

GetFloorAmountOk returns a tuple with the FloorAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloorAmount

`func (o *RatePlanMasterInfoType) SetFloorAmount(v float32)`

SetFloorAmount sets FloorAmount field to given value.

### HasFloorAmount

`func (o *RatePlanMasterInfoType) HasFloorAmount() bool`

HasFloorAmount returns a boolean if a field has been set.

### GetHotelId

`func (o *RatePlanMasterInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RatePlanMasterInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RatePlanMasterInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RatePlanMasterInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetHouseUse

`func (o *RatePlanMasterInfoType) GetHouseUse() bool`

GetHouseUse returns the HouseUse field if non-nil, zero value otherwise.

### GetHouseUseOk

`func (o *RatePlanMasterInfoType) GetHouseUseOk() (*bool, bool)`

GetHouseUseOk returns a tuple with the HouseUse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHouseUse

`func (o *RatePlanMasterInfoType) SetHouseUse(v bool)`

SetHouseUse sets HouseUse field to given value.

### HasHouseUse

`func (o *RatePlanMasterInfoType) HasHouseUse() bool`

HasHouseUse returns a boolean if a field has been set.

### GetPrimaryDetails

`func (o *RatePlanMasterInfoType) GetPrimaryDetails() RatePlanPrimaryDetailsType`

GetPrimaryDetails returns the PrimaryDetails field if non-nil, zero value otherwise.

### GetPrimaryDetailsOk

`func (o *RatePlanMasterInfoType) GetPrimaryDetailsOk() (*RatePlanPrimaryDetailsType, bool)`

GetPrimaryDetailsOk returns a tuple with the PrimaryDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryDetails

`func (o *RatePlanMasterInfoType) SetPrimaryDetails(v RatePlanPrimaryDetailsType)`

SetPrimaryDetails sets PrimaryDetails field to given value.

### HasPrimaryDetails

`func (o *RatePlanMasterInfoType) HasPrimaryDetails() bool`

HasPrimaryDetails returns a boolean if a field has been set.

### GetRatePlanBasedOnRates

`func (o *RatePlanMasterInfoType) GetRatePlanBasedOnRates() []RatePlanBasedOnRateType`

GetRatePlanBasedOnRates returns the RatePlanBasedOnRates field if non-nil, zero value otherwise.

### GetRatePlanBasedOnRatesOk

`func (o *RatePlanMasterInfoType) GetRatePlanBasedOnRatesOk() (*[]RatePlanBasedOnRateType, bool)`

GetRatePlanBasedOnRatesOk returns a tuple with the RatePlanBasedOnRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanBasedOnRates

`func (o *RatePlanMasterInfoType) SetRatePlanBasedOnRates(v []RatePlanBasedOnRateType)`

SetRatePlanBasedOnRates sets RatePlanBasedOnRates field to given value.

### HasRatePlanBasedOnRates

`func (o *RatePlanMasterInfoType) HasRatePlanBasedOnRates() bool`

HasRatePlanBasedOnRates returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *RatePlanMasterInfoType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *RatePlanMasterInfoType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *RatePlanMasterInfoType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *RatePlanMasterInfoType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetRateTiers

`func (o *RatePlanMasterInfoType) GetRateTiers() []RateTierType`

GetRateTiers returns the RateTiers field if non-nil, zero value otherwise.

### GetRateTiersOk

`func (o *RatePlanMasterInfoType) GetRateTiersOk() (*[]RateTierType, bool)`

GetRateTiersOk returns a tuple with the RateTiers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateTiers

`func (o *RatePlanMasterInfoType) SetRateTiers(v []RateTierType)`

SetRateTiers sets RateTiers field to given value.

### HasRateTiers

`func (o *RatePlanMasterInfoType) HasRateTiers() bool`

HasRateTiers returns a boolean if a field has been set.

### GetRoomTypeList

`func (o *RatePlanMasterInfoType) GetRoomTypeList() []RateRoomTypeDetailType`

GetRoomTypeList returns the RoomTypeList field if non-nil, zero value otherwise.

### GetRoomTypeListOk

`func (o *RatePlanMasterInfoType) GetRoomTypeListOk() (*[]RateRoomTypeDetailType, bool)`

GetRoomTypeListOk returns a tuple with the RoomTypeList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypeList

`func (o *RatePlanMasterInfoType) SetRoomTypeList(v []RateRoomTypeDetailType)`

SetRoomTypeList sets RoomTypeList field to given value.

### HasRoomTypeList

`func (o *RatePlanMasterInfoType) HasRoomTypeList() bool`

HasRoomTypeList returns a boolean if a field has been set.

### GetTiered

`func (o *RatePlanMasterInfoType) GetTiered() bool`

GetTiered returns the Tiered field if non-nil, zero value otherwise.

### GetTieredOk

`func (o *RatePlanMasterInfoType) GetTieredOk() (*bool, bool)`

GetTieredOk returns a tuple with the Tiered field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTiered

`func (o *RatePlanMasterInfoType) SetTiered(v bool)`

SetTiered sets Tiered field to given value.

### HasTiered

`func (o *RatePlanMasterInfoType) HasTiered() bool`

HasTiered returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


