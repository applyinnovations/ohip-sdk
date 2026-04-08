# CreditCardMappingType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SystemInfo** | Pointer to [**SystemInfoType**](SystemInfoType.md) |  | [optional] 
**LocalSystemCode** | Pointer to **string** | Code used inside the OPERA System | [optional] 
**ExternalSystemCode** | Pointer to **string** | Code used in the External System | [optional] 
**Description** | Pointer to **string** | Detailed Description of the given entity. | [optional] 
**DateRange** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 

## Methods

### NewCreditCardMappingType

`func NewCreditCardMappingType() *CreditCardMappingType`

NewCreditCardMappingType instantiates a new CreditCardMappingType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreditCardMappingTypeWithDefaults

`func NewCreditCardMappingTypeWithDefaults() *CreditCardMappingType`

NewCreditCardMappingTypeWithDefaults instantiates a new CreditCardMappingType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSystemInfo

`func (o *CreditCardMappingType) GetSystemInfo() SystemInfoType`

GetSystemInfo returns the SystemInfo field if non-nil, zero value otherwise.

### GetSystemInfoOk

`func (o *CreditCardMappingType) GetSystemInfoOk() (*SystemInfoType, bool)`

GetSystemInfoOk returns a tuple with the SystemInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemInfo

`func (o *CreditCardMappingType) SetSystemInfo(v SystemInfoType)`

SetSystemInfo sets SystemInfo field to given value.

### HasSystemInfo

`func (o *CreditCardMappingType) HasSystemInfo() bool`

HasSystemInfo returns a boolean if a field has been set.

### GetLocalSystemCode

`func (o *CreditCardMappingType) GetLocalSystemCode() string`

GetLocalSystemCode returns the LocalSystemCode field if non-nil, zero value otherwise.

### GetLocalSystemCodeOk

`func (o *CreditCardMappingType) GetLocalSystemCodeOk() (*string, bool)`

GetLocalSystemCodeOk returns a tuple with the LocalSystemCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocalSystemCode

`func (o *CreditCardMappingType) SetLocalSystemCode(v string)`

SetLocalSystemCode sets LocalSystemCode field to given value.

### HasLocalSystemCode

`func (o *CreditCardMappingType) HasLocalSystemCode() bool`

HasLocalSystemCode returns a boolean if a field has been set.

### GetExternalSystemCode

`func (o *CreditCardMappingType) GetExternalSystemCode() string`

GetExternalSystemCode returns the ExternalSystemCode field if non-nil, zero value otherwise.

### GetExternalSystemCodeOk

`func (o *CreditCardMappingType) GetExternalSystemCodeOk() (*string, bool)`

GetExternalSystemCodeOk returns a tuple with the ExternalSystemCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalSystemCode

`func (o *CreditCardMappingType) SetExternalSystemCode(v string)`

SetExternalSystemCode sets ExternalSystemCode field to given value.

### HasExternalSystemCode

`func (o *CreditCardMappingType) HasExternalSystemCode() bool`

HasExternalSystemCode returns a boolean if a field has been set.

### GetDescription

`func (o *CreditCardMappingType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CreditCardMappingType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CreditCardMappingType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CreditCardMappingType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDateRange

`func (o *CreditCardMappingType) GetDateRange() TimeSpanType`

GetDateRange returns the DateRange field if non-nil, zero value otherwise.

### GetDateRangeOk

`func (o *CreditCardMappingType) GetDateRangeOk() (*TimeSpanType, bool)`

GetDateRangeOk returns a tuple with the DateRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateRange

`func (o *CreditCardMappingType) SetDateRange(v TimeSpanType)`

SetDateRange sets DateRange field to given value.

### HasDateRange

`func (o *CreditCardMappingType) HasDateRange() bool`

HasDateRange returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


