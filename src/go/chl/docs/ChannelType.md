# ChannelType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AddOnLicense** | Pointer to **string** | External system Add-on license. Available for ADS only. | [optional] 
**Carriers** | Pointer to [**[]SystemCarrierType**](SystemCarrierType.md) | External system carrier details. | [optional] 
**ErrorCodes** | Pointer to [**[]SystemErrorType**](SystemErrorType.md) | External system error details. | [optional] 
**Parameters** | Pointer to [**ParametersType**](ParametersType.md) |  | [optional] 
**RateCategories** | Pointer to [**[]SystemRateCategoryType**](SystemRateCategoryType.md) | External system rate categories details. | [optional] 
**RateLevels** | Pointer to [**[]SystemRateLevelType**](SystemRateLevelType.md) | External system rate levels details. | [optional] 
**RoomTypes** | Pointer to [**[]SystemRoomTypeType**](SystemRoomTypeType.md) | External system room type details. | [optional] 
**SellBy** | Pointer to **string** | External system Sell By. | [optional] 
**SystemInfo** | Pointer to [**SystemInfoType**](SystemInfoType.md) |  | [optional] 

## Methods

### NewChannelType

`func NewChannelType() *ChannelType`

NewChannelType instantiates a new ChannelType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelTypeWithDefaults

`func NewChannelTypeWithDefaults() *ChannelType`

NewChannelTypeWithDefaults instantiates a new ChannelType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddOnLicense

`func (o *ChannelType) GetAddOnLicense() string`

GetAddOnLicense returns the AddOnLicense field if non-nil, zero value otherwise.

### GetAddOnLicenseOk

`func (o *ChannelType) GetAddOnLicenseOk() (*string, bool)`

GetAddOnLicenseOk returns a tuple with the AddOnLicense field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddOnLicense

`func (o *ChannelType) SetAddOnLicense(v string)`

SetAddOnLicense sets AddOnLicense field to given value.

### HasAddOnLicense

`func (o *ChannelType) HasAddOnLicense() bool`

HasAddOnLicense returns a boolean if a field has been set.

### GetCarriers

`func (o *ChannelType) GetCarriers() []SystemCarrierType`

GetCarriers returns the Carriers field if non-nil, zero value otherwise.

### GetCarriersOk

`func (o *ChannelType) GetCarriersOk() (*[]SystemCarrierType, bool)`

GetCarriersOk returns a tuple with the Carriers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCarriers

`func (o *ChannelType) SetCarriers(v []SystemCarrierType)`

SetCarriers sets Carriers field to given value.

### HasCarriers

`func (o *ChannelType) HasCarriers() bool`

HasCarriers returns a boolean if a field has been set.

### GetErrorCodes

`func (o *ChannelType) GetErrorCodes() []SystemErrorType`

GetErrorCodes returns the ErrorCodes field if non-nil, zero value otherwise.

### GetErrorCodesOk

`func (o *ChannelType) GetErrorCodesOk() (*[]SystemErrorType, bool)`

GetErrorCodesOk returns a tuple with the ErrorCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorCodes

`func (o *ChannelType) SetErrorCodes(v []SystemErrorType)`

SetErrorCodes sets ErrorCodes field to given value.

### HasErrorCodes

`func (o *ChannelType) HasErrorCodes() bool`

HasErrorCodes returns a boolean if a field has been set.

### GetParameters

`func (o *ChannelType) GetParameters() ParametersType`

GetParameters returns the Parameters field if non-nil, zero value otherwise.

### GetParametersOk

`func (o *ChannelType) GetParametersOk() (*ParametersType, bool)`

GetParametersOk returns a tuple with the Parameters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParameters

`func (o *ChannelType) SetParameters(v ParametersType)`

SetParameters sets Parameters field to given value.

### HasParameters

`func (o *ChannelType) HasParameters() bool`

HasParameters returns a boolean if a field has been set.

### GetRateCategories

`func (o *ChannelType) GetRateCategories() []SystemRateCategoryType`

GetRateCategories returns the RateCategories field if non-nil, zero value otherwise.

### GetRateCategoriesOk

`func (o *ChannelType) GetRateCategoriesOk() (*[]SystemRateCategoryType, bool)`

GetRateCategoriesOk returns a tuple with the RateCategories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCategories

`func (o *ChannelType) SetRateCategories(v []SystemRateCategoryType)`

SetRateCategories sets RateCategories field to given value.

### HasRateCategories

`func (o *ChannelType) HasRateCategories() bool`

HasRateCategories returns a boolean if a field has been set.

### GetRateLevels

`func (o *ChannelType) GetRateLevels() []SystemRateLevelType`

GetRateLevels returns the RateLevels field if non-nil, zero value otherwise.

### GetRateLevelsOk

`func (o *ChannelType) GetRateLevelsOk() (*[]SystemRateLevelType, bool)`

GetRateLevelsOk returns a tuple with the RateLevels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateLevels

`func (o *ChannelType) SetRateLevels(v []SystemRateLevelType)`

SetRateLevels sets RateLevels field to given value.

### HasRateLevels

`func (o *ChannelType) HasRateLevels() bool`

HasRateLevels returns a boolean if a field has been set.

### GetRoomTypes

`func (o *ChannelType) GetRoomTypes() []SystemRoomTypeType`

GetRoomTypes returns the RoomTypes field if non-nil, zero value otherwise.

### GetRoomTypesOk

`func (o *ChannelType) GetRoomTypesOk() (*[]SystemRoomTypeType, bool)`

GetRoomTypesOk returns a tuple with the RoomTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypes

`func (o *ChannelType) SetRoomTypes(v []SystemRoomTypeType)`

SetRoomTypes sets RoomTypes field to given value.

### HasRoomTypes

`func (o *ChannelType) HasRoomTypes() bool`

HasRoomTypes returns a boolean if a field has been set.

### GetSellBy

`func (o *ChannelType) GetSellBy() string`

GetSellBy returns the SellBy field if non-nil, zero value otherwise.

### GetSellByOk

`func (o *ChannelType) GetSellByOk() (*string, bool)`

GetSellByOk returns a tuple with the SellBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellBy

`func (o *ChannelType) SetSellBy(v string)`

SetSellBy sets SellBy field to given value.

### HasSellBy

`func (o *ChannelType) HasSellBy() bool`

HasSellBy returns a boolean if a field has been set.

### GetSystemInfo

`func (o *ChannelType) GetSystemInfo() SystemInfoType`

GetSystemInfo returns the SystemInfo field if non-nil, zero value otherwise.

### GetSystemInfoOk

`func (o *ChannelType) GetSystemInfoOk() (*SystemInfoType, bool)`

GetSystemInfoOk returns a tuple with the SystemInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemInfo

`func (o *ChannelType) SetSystemInfo(v SystemInfoType)`

SetSystemInfo sets SystemInfo field to given value.

### HasSystemInfo

`func (o *ChannelType) HasSystemInfo() bool`

HasSystemInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


