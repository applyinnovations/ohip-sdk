# FiscalCommandType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Unique code of the hotel. | [optional] 
**FiscalCommandCode** | Pointer to **string** | Fiscal Command. | [optional] 
**FiscalPartnerCodes** | Pointer to **[]string** |  | [optional] 
**Description** | Pointer to **string** | Fiscal Command description that is only used during a fetch. | [optional] 
**Inactive** | Pointer to **bool** | A flag that determines whether to fetch active records or inactive records. | [optional] 

## Methods

### NewFiscalCommandType

`func NewFiscalCommandType() *FiscalCommandType`

NewFiscalCommandType instantiates a new FiscalCommandType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFiscalCommandTypeWithDefaults

`func NewFiscalCommandTypeWithDefaults() *FiscalCommandType`

NewFiscalCommandTypeWithDefaults instantiates a new FiscalCommandType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *FiscalCommandType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *FiscalCommandType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *FiscalCommandType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *FiscalCommandType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetFiscalCommandCode

`func (o *FiscalCommandType) GetFiscalCommandCode() string`

GetFiscalCommandCode returns the FiscalCommandCode field if non-nil, zero value otherwise.

### GetFiscalCommandCodeOk

`func (o *FiscalCommandType) GetFiscalCommandCodeOk() (*string, bool)`

GetFiscalCommandCodeOk returns a tuple with the FiscalCommandCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalCommandCode

`func (o *FiscalCommandType) SetFiscalCommandCode(v string)`

SetFiscalCommandCode sets FiscalCommandCode field to given value.

### HasFiscalCommandCode

`func (o *FiscalCommandType) HasFiscalCommandCode() bool`

HasFiscalCommandCode returns a boolean if a field has been set.

### GetFiscalPartnerCodes

`func (o *FiscalCommandType) GetFiscalPartnerCodes() []string`

GetFiscalPartnerCodes returns the FiscalPartnerCodes field if non-nil, zero value otherwise.

### GetFiscalPartnerCodesOk

`func (o *FiscalCommandType) GetFiscalPartnerCodesOk() (*[]string, bool)`

GetFiscalPartnerCodesOk returns a tuple with the FiscalPartnerCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalPartnerCodes

`func (o *FiscalCommandType) SetFiscalPartnerCodes(v []string)`

SetFiscalPartnerCodes sets FiscalPartnerCodes field to given value.

### HasFiscalPartnerCodes

`func (o *FiscalCommandType) HasFiscalPartnerCodes() bool`

HasFiscalPartnerCodes returns a boolean if a field has been set.

### GetDescription

`func (o *FiscalCommandType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *FiscalCommandType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *FiscalCommandType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *FiscalCommandType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetInactive

`func (o *FiscalCommandType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *FiscalCommandType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *FiscalCommandType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *FiscalCommandType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


