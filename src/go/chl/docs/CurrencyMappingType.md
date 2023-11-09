# CurrencyMappingType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelDecimalPosition** | Pointer to **int32** | Number of decimal positions used by the currency as per the channel. | [optional] 
**DateRange** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**Description** | Pointer to **string** | Detailed Description of the given entity. | [optional] 
**ExternalSystemCode** | Pointer to **string** | Code used in the External System | [optional] 
**LanyonDecimalPosition** | Pointer to **int32** | Number of decimal positions used by the currency. | [optional] 
**LocalSystemCode** | Pointer to **string** | Code used inside the OPERA System | [optional] 
**SystemInfo** | Pointer to [**SystemInfoType**](SystemInfoType.md) |  | [optional] 

## Methods

### NewCurrencyMappingType

`func NewCurrencyMappingType() *CurrencyMappingType`

NewCurrencyMappingType instantiates a new CurrencyMappingType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCurrencyMappingTypeWithDefaults

`func NewCurrencyMappingTypeWithDefaults() *CurrencyMappingType`

NewCurrencyMappingTypeWithDefaults instantiates a new CurrencyMappingType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelDecimalPosition

`func (o *CurrencyMappingType) GetChannelDecimalPosition() int32`

GetChannelDecimalPosition returns the ChannelDecimalPosition field if non-nil, zero value otherwise.

### GetChannelDecimalPositionOk

`func (o *CurrencyMappingType) GetChannelDecimalPositionOk() (*int32, bool)`

GetChannelDecimalPositionOk returns a tuple with the ChannelDecimalPosition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelDecimalPosition

`func (o *CurrencyMappingType) SetChannelDecimalPosition(v int32)`

SetChannelDecimalPosition sets ChannelDecimalPosition field to given value.

### HasChannelDecimalPosition

`func (o *CurrencyMappingType) HasChannelDecimalPosition() bool`

HasChannelDecimalPosition returns a boolean if a field has been set.

### GetDateRange

`func (o *CurrencyMappingType) GetDateRange() TimeSpanType`

GetDateRange returns the DateRange field if non-nil, zero value otherwise.

### GetDateRangeOk

`func (o *CurrencyMappingType) GetDateRangeOk() (*TimeSpanType, bool)`

GetDateRangeOk returns a tuple with the DateRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateRange

`func (o *CurrencyMappingType) SetDateRange(v TimeSpanType)`

SetDateRange sets DateRange field to given value.

### HasDateRange

`func (o *CurrencyMappingType) HasDateRange() bool`

HasDateRange returns a boolean if a field has been set.

### GetDescription

`func (o *CurrencyMappingType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CurrencyMappingType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CurrencyMappingType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CurrencyMappingType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetExternalSystemCode

`func (o *CurrencyMappingType) GetExternalSystemCode() string`

GetExternalSystemCode returns the ExternalSystemCode field if non-nil, zero value otherwise.

### GetExternalSystemCodeOk

`func (o *CurrencyMappingType) GetExternalSystemCodeOk() (*string, bool)`

GetExternalSystemCodeOk returns a tuple with the ExternalSystemCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalSystemCode

`func (o *CurrencyMappingType) SetExternalSystemCode(v string)`

SetExternalSystemCode sets ExternalSystemCode field to given value.

### HasExternalSystemCode

`func (o *CurrencyMappingType) HasExternalSystemCode() bool`

HasExternalSystemCode returns a boolean if a field has been set.

### GetLanyonDecimalPosition

`func (o *CurrencyMappingType) GetLanyonDecimalPosition() int32`

GetLanyonDecimalPosition returns the LanyonDecimalPosition field if non-nil, zero value otherwise.

### GetLanyonDecimalPositionOk

`func (o *CurrencyMappingType) GetLanyonDecimalPositionOk() (*int32, bool)`

GetLanyonDecimalPositionOk returns a tuple with the LanyonDecimalPosition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanyonDecimalPosition

`func (o *CurrencyMappingType) SetLanyonDecimalPosition(v int32)`

SetLanyonDecimalPosition sets LanyonDecimalPosition field to given value.

### HasLanyonDecimalPosition

`func (o *CurrencyMappingType) HasLanyonDecimalPosition() bool`

HasLanyonDecimalPosition returns a boolean if a field has been set.

### GetLocalSystemCode

`func (o *CurrencyMappingType) GetLocalSystemCode() string`

GetLocalSystemCode returns the LocalSystemCode field if non-nil, zero value otherwise.

### GetLocalSystemCodeOk

`func (o *CurrencyMappingType) GetLocalSystemCodeOk() (*string, bool)`

GetLocalSystemCodeOk returns a tuple with the LocalSystemCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocalSystemCode

`func (o *CurrencyMappingType) SetLocalSystemCode(v string)`

SetLocalSystemCode sets LocalSystemCode field to given value.

### HasLocalSystemCode

`func (o *CurrencyMappingType) HasLocalSystemCode() bool`

HasLocalSystemCode returns a boolean if a field has been set.

### GetSystemInfo

`func (o *CurrencyMappingType) GetSystemInfo() SystemInfoType`

GetSystemInfo returns the SystemInfo field if non-nil, zero value otherwise.

### GetSystemInfoOk

`func (o *CurrencyMappingType) GetSystemInfoOk() (*SystemInfoType, bool)`

GetSystemInfoOk returns a tuple with the SystemInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemInfo

`func (o *CurrencyMappingType) SetSystemInfo(v SystemInfoType)`

SetSystemInfo sets SystemInfo field to given value.

### HasSystemInfo

`func (o *CurrencyMappingType) HasSystemInfo() bool`

HasSystemInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


