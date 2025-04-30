# PropertyMappingType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemInfo** | Pointer to [**SystemInfoType**](SystemInfoType.md) |  | [optional] 
**InitialUpload** | Pointer to **bool** | Initial Upload or not. | [optional] 
**LocalSystemCode** | Pointer to **string** | Code used inside the OPERA System | [optional] 
**ExternalSystemCode** | Pointer to **string** | Code used in the External System | [optional] 
**Description** | Pointer to **string** | Detailed Description of the given entity. | [optional] 
**DateRange** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**City** | Pointer to **string** | City code of the channel hotel. | [optional] 
**RoomLimit** | Pointer to **int32** | Maximum room limit for the channel hotel reservation. | [optional] 
**BookingLimit** | Pointer to **int32** | Booking limit used by ADS interface for booking limit upload. Available if channel type is ADS and ADS ARI is enabled. | [optional] 
**HotelChainId** | Pointer to **string** | Hotel chain ID of channel-hotel mapping. Only available for UA channel. It may not be modified if in myfidelio environment, and user is for a specific hotel. | [optional] 
**ChainCode** | Pointer to **string** | Chain code for the channel-hotel mapping. | [optional] 
**PrevailingRates** | Pointer to **bool** | Prevailing rates flag of channel-hotel mapping. Available if PREVAILING_RATE_BY_LOS parameter is on. | [optional] 
**ARIEnabled** | Pointer to **bool** | ADS ARI enabled flag of channel-hotel mapping. Available only if channel type is ADS. | [optional] 
**AddOnLicense** | Pointer to **string** | External system Add-on license. This is mandatory when Channel Type is ADS. | [optional] 
**ChannelHotelCodeMappingBuckets** | Pointer to [**ChannelHotelCodeMappingBucketsType**](ChannelHotelCodeMappingBucketsType.md) |  | [optional] 

## Methods

### NewPropertyMappingType

`func NewPropertyMappingType() *PropertyMappingType`

NewPropertyMappingType instantiates a new PropertyMappingType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPropertyMappingTypeWithDefaults

`func NewPropertyMappingTypeWithDefaults() *PropertyMappingType`

NewPropertyMappingTypeWithDefaults instantiates a new PropertyMappingType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemInfo

`func (o *PropertyMappingType) GetSystemInfo() SystemInfoType`

GetSystemInfo returns the SystemInfo field if non-nil, zero value otherwise.

### GetSystemInfoOk

`func (o *PropertyMappingType) GetSystemInfoOk() (*SystemInfoType, bool)`

GetSystemInfoOk returns a tuple with the SystemInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemInfo

`func (o *PropertyMappingType) SetSystemInfo(v SystemInfoType)`

SetSystemInfo sets SystemInfo field to given value.

### HasSystemInfo

`func (o *PropertyMappingType) HasSystemInfo() bool`

HasSystemInfo returns a boolean if a field has been set.

### GetInitialUpload

`func (o *PropertyMappingType) GetInitialUpload() bool`

GetInitialUpload returns the InitialUpload field if non-nil, zero value otherwise.

### GetInitialUploadOk

`func (o *PropertyMappingType) GetInitialUploadOk() (*bool, bool)`

GetInitialUploadOk returns a tuple with the InitialUpload field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInitialUpload

`func (o *PropertyMappingType) SetInitialUpload(v bool)`

SetInitialUpload sets InitialUpload field to given value.

### HasInitialUpload

`func (o *PropertyMappingType) HasInitialUpload() bool`

HasInitialUpload returns a boolean if a field has been set.

### GetLocalSystemCode

`func (o *PropertyMappingType) GetLocalSystemCode() string`

GetLocalSystemCode returns the LocalSystemCode field if non-nil, zero value otherwise.

### GetLocalSystemCodeOk

`func (o *PropertyMappingType) GetLocalSystemCodeOk() (*string, bool)`

GetLocalSystemCodeOk returns a tuple with the LocalSystemCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocalSystemCode

`func (o *PropertyMappingType) SetLocalSystemCode(v string)`

SetLocalSystemCode sets LocalSystemCode field to given value.

### HasLocalSystemCode

`func (o *PropertyMappingType) HasLocalSystemCode() bool`

HasLocalSystemCode returns a boolean if a field has been set.

### GetExternalSystemCode

`func (o *PropertyMappingType) GetExternalSystemCode() string`

GetExternalSystemCode returns the ExternalSystemCode field if non-nil, zero value otherwise.

### GetExternalSystemCodeOk

`func (o *PropertyMappingType) GetExternalSystemCodeOk() (*string, bool)`

GetExternalSystemCodeOk returns a tuple with the ExternalSystemCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalSystemCode

`func (o *PropertyMappingType) SetExternalSystemCode(v string)`

SetExternalSystemCode sets ExternalSystemCode field to given value.

### HasExternalSystemCode

`func (o *PropertyMappingType) HasExternalSystemCode() bool`

HasExternalSystemCode returns a boolean if a field has been set.

### GetDescription

`func (o *PropertyMappingType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PropertyMappingType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PropertyMappingType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *PropertyMappingType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDateRange

`func (o *PropertyMappingType) GetDateRange() TimeSpanType`

GetDateRange returns the DateRange field if non-nil, zero value otherwise.

### GetDateRangeOk

`func (o *PropertyMappingType) GetDateRangeOk() (*TimeSpanType, bool)`

GetDateRangeOk returns a tuple with the DateRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateRange

`func (o *PropertyMappingType) SetDateRange(v TimeSpanType)`

SetDateRange sets DateRange field to given value.

### HasDateRange

`func (o *PropertyMappingType) HasDateRange() bool`

HasDateRange returns a boolean if a field has been set.

### GetCity

`func (o *PropertyMappingType) GetCity() string`

GetCity returns the City field if non-nil, zero value otherwise.

### GetCityOk

`func (o *PropertyMappingType) GetCityOk() (*string, bool)`

GetCityOk returns a tuple with the City field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCity

`func (o *PropertyMappingType) SetCity(v string)`

SetCity sets City field to given value.

### HasCity

`func (o *PropertyMappingType) HasCity() bool`

HasCity returns a boolean if a field has been set.

### GetRoomLimit

`func (o *PropertyMappingType) GetRoomLimit() int32`

GetRoomLimit returns the RoomLimit field if non-nil, zero value otherwise.

### GetRoomLimitOk

`func (o *PropertyMappingType) GetRoomLimitOk() (*int32, bool)`

GetRoomLimitOk returns a tuple with the RoomLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomLimit

`func (o *PropertyMappingType) SetRoomLimit(v int32)`

SetRoomLimit sets RoomLimit field to given value.

### HasRoomLimit

`func (o *PropertyMappingType) HasRoomLimit() bool`

HasRoomLimit returns a boolean if a field has been set.

### GetBookingLimit

`func (o *PropertyMappingType) GetBookingLimit() int32`

GetBookingLimit returns the BookingLimit field if non-nil, zero value otherwise.

### GetBookingLimitOk

`func (o *PropertyMappingType) GetBookingLimitOk() (*int32, bool)`

GetBookingLimitOk returns a tuple with the BookingLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingLimit

`func (o *PropertyMappingType) SetBookingLimit(v int32)`

SetBookingLimit sets BookingLimit field to given value.

### HasBookingLimit

`func (o *PropertyMappingType) HasBookingLimit() bool`

HasBookingLimit returns a boolean if a field has been set.

### GetHotelChainId

`func (o *PropertyMappingType) GetHotelChainId() string`

GetHotelChainId returns the HotelChainId field if non-nil, zero value otherwise.

### GetHotelChainIdOk

`func (o *PropertyMappingType) GetHotelChainIdOk() (*string, bool)`

GetHotelChainIdOk returns a tuple with the HotelChainId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelChainId

`func (o *PropertyMappingType) SetHotelChainId(v string)`

SetHotelChainId sets HotelChainId field to given value.

### HasHotelChainId

`func (o *PropertyMappingType) HasHotelChainId() bool`

HasHotelChainId returns a boolean if a field has been set.

### GetChainCode

`func (o *PropertyMappingType) GetChainCode() string`

GetChainCode returns the ChainCode field if non-nil, zero value otherwise.

### GetChainCodeOk

`func (o *PropertyMappingType) GetChainCodeOk() (*string, bool)`

GetChainCodeOk returns a tuple with the ChainCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainCode

`func (o *PropertyMappingType) SetChainCode(v string)`

SetChainCode sets ChainCode field to given value.

### HasChainCode

`func (o *PropertyMappingType) HasChainCode() bool`

HasChainCode returns a boolean if a field has been set.

### GetPrevailingRates

`func (o *PropertyMappingType) GetPrevailingRates() bool`

GetPrevailingRates returns the PrevailingRates field if non-nil, zero value otherwise.

### GetPrevailingRatesOk

`func (o *PropertyMappingType) GetPrevailingRatesOk() (*bool, bool)`

GetPrevailingRatesOk returns a tuple with the PrevailingRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrevailingRates

`func (o *PropertyMappingType) SetPrevailingRates(v bool)`

SetPrevailingRates sets PrevailingRates field to given value.

### HasPrevailingRates

`func (o *PropertyMappingType) HasPrevailingRates() bool`

HasPrevailingRates returns a boolean if a field has been set.

### GetARIEnabled

`func (o *PropertyMappingType) GetARIEnabled() bool`

GetARIEnabled returns the ARIEnabled field if non-nil, zero value otherwise.

### GetARIEnabledOk

`func (o *PropertyMappingType) GetARIEnabledOk() (*bool, bool)`

GetARIEnabledOk returns a tuple with the ARIEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetARIEnabled

`func (o *PropertyMappingType) SetARIEnabled(v bool)`

SetARIEnabled sets ARIEnabled field to given value.

### HasARIEnabled

`func (o *PropertyMappingType) HasARIEnabled() bool`

HasARIEnabled returns a boolean if a field has been set.

### GetAddOnLicense

`func (o *PropertyMappingType) GetAddOnLicense() string`

GetAddOnLicense returns the AddOnLicense field if non-nil, zero value otherwise.

### GetAddOnLicenseOk

`func (o *PropertyMappingType) GetAddOnLicenseOk() (*string, bool)`

GetAddOnLicenseOk returns a tuple with the AddOnLicense field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddOnLicense

`func (o *PropertyMappingType) SetAddOnLicense(v string)`

SetAddOnLicense sets AddOnLicense field to given value.

### HasAddOnLicense

`func (o *PropertyMappingType) HasAddOnLicense() bool`

HasAddOnLicense returns a boolean if a field has been set.

### GetChannelHotelCodeMappingBuckets

`func (o *PropertyMappingType) GetChannelHotelCodeMappingBuckets() ChannelHotelCodeMappingBucketsType`

GetChannelHotelCodeMappingBuckets returns the ChannelHotelCodeMappingBuckets field if non-nil, zero value otherwise.

### GetChannelHotelCodeMappingBucketsOk

`func (o *PropertyMappingType) GetChannelHotelCodeMappingBucketsOk() (*ChannelHotelCodeMappingBucketsType, bool)`

GetChannelHotelCodeMappingBucketsOk returns a tuple with the ChannelHotelCodeMappingBuckets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelHotelCodeMappingBuckets

`func (o *PropertyMappingType) SetChannelHotelCodeMappingBuckets(v ChannelHotelCodeMappingBucketsType)`

SetChannelHotelCodeMappingBuckets sets ChannelHotelCodeMappingBuckets field to given value.

### HasChannelHotelCodeMappingBuckets

`func (o *PropertyMappingType) HasChannelHotelCodeMappingBuckets() bool`

HasChannelHotelCodeMappingBuckets returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


