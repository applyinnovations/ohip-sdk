# FiscalInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FiscalPayloadType** | Pointer to [**PayloadType**](PayloadType.md) |  | [optional] 
**FiscalStatus** | Pointer to **string** | OPERA Fiscal status. | [optional] 
**PartnerCode** | Pointer to **string** | Fiscal partner code. | [optional] 

## Methods

### NewFiscalInfoType

`func NewFiscalInfoType() *FiscalInfoType`

NewFiscalInfoType instantiates a new FiscalInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFiscalInfoTypeWithDefaults

`func NewFiscalInfoTypeWithDefaults() *FiscalInfoType`

NewFiscalInfoTypeWithDefaults instantiates a new FiscalInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFiscalPayloadType

`func (o *FiscalInfoType) GetFiscalPayloadType() PayloadType`

GetFiscalPayloadType returns the FiscalPayloadType field if non-nil, zero value otherwise.

### GetFiscalPayloadTypeOk

`func (o *FiscalInfoType) GetFiscalPayloadTypeOk() (*PayloadType, bool)`

GetFiscalPayloadTypeOk returns a tuple with the FiscalPayloadType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalPayloadType

`func (o *FiscalInfoType) SetFiscalPayloadType(v PayloadType)`

SetFiscalPayloadType sets FiscalPayloadType field to given value.

### HasFiscalPayloadType

`func (o *FiscalInfoType) HasFiscalPayloadType() bool`

HasFiscalPayloadType returns a boolean if a field has been set.

### GetFiscalStatus

`func (o *FiscalInfoType) GetFiscalStatus() string`

GetFiscalStatus returns the FiscalStatus field if non-nil, zero value otherwise.

### GetFiscalStatusOk

`func (o *FiscalInfoType) GetFiscalStatusOk() (*string, bool)`

GetFiscalStatusOk returns a tuple with the FiscalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalStatus

`func (o *FiscalInfoType) SetFiscalStatus(v string)`

SetFiscalStatus sets FiscalStatus field to given value.

### HasFiscalStatus

`func (o *FiscalInfoType) HasFiscalStatus() bool`

HasFiscalStatus returns a boolean if a field has been set.

### GetPartnerCode

`func (o *FiscalInfoType) GetPartnerCode() string`

GetPartnerCode returns the PartnerCode field if non-nil, zero value otherwise.

### GetPartnerCodeOk

`func (o *FiscalInfoType) GetPartnerCodeOk() (*string, bool)`

GetPartnerCodeOk returns a tuple with the PartnerCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPartnerCode

`func (o *FiscalInfoType) SetPartnerCode(v string)`

SetPartnerCode sets PartnerCode field to given value.

### HasPartnerCode

`func (o *FiscalInfoType) HasPartnerCode() bool`

HasPartnerCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


