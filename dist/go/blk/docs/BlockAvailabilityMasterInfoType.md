# BlockAvailabilityMasterInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CurrencyExchangeRates** | Pointer to [**[]CurrencyExchangeRateType**](CurrencyExchangeRateType.md) | Currency exchange rate information. | [optional] 
**FetchedRoomTypes** | Pointer to [**[]BlockAvailabilityRoomTypeInfo**](BlockAvailabilityRoomTypeInfo.md) | Details pertaining to a room type. | [optional] 
**MasterRoomTypes** | Pointer to **[]string** |  | [optional] 
**RatePlans** | Pointer to [**[]BlockAvailabilityRatePlanInfo**](BlockAvailabilityRatePlanInfo.md) | Rate plan code details for the block. | [optional] 

## Methods

### NewBlockAvailabilityMasterInfoType

`func NewBlockAvailabilityMasterInfoType() *BlockAvailabilityMasterInfoType`

NewBlockAvailabilityMasterInfoType instantiates a new BlockAvailabilityMasterInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockAvailabilityMasterInfoTypeWithDefaults

`func NewBlockAvailabilityMasterInfoTypeWithDefaults() *BlockAvailabilityMasterInfoType`

NewBlockAvailabilityMasterInfoTypeWithDefaults instantiates a new BlockAvailabilityMasterInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCurrencyExchangeRates

`func (o *BlockAvailabilityMasterInfoType) GetCurrencyExchangeRates() []CurrencyExchangeRateType`

GetCurrencyExchangeRates returns the CurrencyExchangeRates field if non-nil, zero value otherwise.

### GetCurrencyExchangeRatesOk

`func (o *BlockAvailabilityMasterInfoType) GetCurrencyExchangeRatesOk() (*[]CurrencyExchangeRateType, bool)`

GetCurrencyExchangeRatesOk returns a tuple with the CurrencyExchangeRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyExchangeRates

`func (o *BlockAvailabilityMasterInfoType) SetCurrencyExchangeRates(v []CurrencyExchangeRateType)`

SetCurrencyExchangeRates sets CurrencyExchangeRates field to given value.

### HasCurrencyExchangeRates

`func (o *BlockAvailabilityMasterInfoType) HasCurrencyExchangeRates() bool`

HasCurrencyExchangeRates returns a boolean if a field has been set.

### GetFetchedRoomTypes

`func (o *BlockAvailabilityMasterInfoType) GetFetchedRoomTypes() []BlockAvailabilityRoomTypeInfo`

GetFetchedRoomTypes returns the FetchedRoomTypes field if non-nil, zero value otherwise.

### GetFetchedRoomTypesOk

`func (o *BlockAvailabilityMasterInfoType) GetFetchedRoomTypesOk() (*[]BlockAvailabilityRoomTypeInfo, bool)`

GetFetchedRoomTypesOk returns a tuple with the FetchedRoomTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFetchedRoomTypes

`func (o *BlockAvailabilityMasterInfoType) SetFetchedRoomTypes(v []BlockAvailabilityRoomTypeInfo)`

SetFetchedRoomTypes sets FetchedRoomTypes field to given value.

### HasFetchedRoomTypes

`func (o *BlockAvailabilityMasterInfoType) HasFetchedRoomTypes() bool`

HasFetchedRoomTypes returns a boolean if a field has been set.

### GetMasterRoomTypes

`func (o *BlockAvailabilityMasterInfoType) GetMasterRoomTypes() []string`

GetMasterRoomTypes returns the MasterRoomTypes field if non-nil, zero value otherwise.

### GetMasterRoomTypesOk

`func (o *BlockAvailabilityMasterInfoType) GetMasterRoomTypesOk() (*[]string, bool)`

GetMasterRoomTypesOk returns a tuple with the MasterRoomTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterRoomTypes

`func (o *BlockAvailabilityMasterInfoType) SetMasterRoomTypes(v []string)`

SetMasterRoomTypes sets MasterRoomTypes field to given value.

### HasMasterRoomTypes

`func (o *BlockAvailabilityMasterInfoType) HasMasterRoomTypes() bool`

HasMasterRoomTypes returns a boolean if a field has been set.

### GetRatePlans

`func (o *BlockAvailabilityMasterInfoType) GetRatePlans() []BlockAvailabilityRatePlanInfo`

GetRatePlans returns the RatePlans field if non-nil, zero value otherwise.

### GetRatePlansOk

`func (o *BlockAvailabilityMasterInfoType) GetRatePlansOk() (*[]BlockAvailabilityRatePlanInfo, bool)`

GetRatePlansOk returns a tuple with the RatePlans field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlans

`func (o *BlockAvailabilityMasterInfoType) SetRatePlans(v []BlockAvailabilityRatePlanInfo)`

SetRatePlans sets RatePlans field to given value.

### HasRatePlans

`func (o *BlockAvailabilityMasterInfoType) HasRatePlans() bool`

HasRatePlans returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


