# FiscalPartnerType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property code. | [optional] 
**PartnerCode** | Pointer to **string** | Used for fiscal partner codes. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Priority** | Pointer to **int32** | Priority order for processing. | [optional] 
**PaymentTypes** | Pointer to **[]string** |  | [optional] 
**PayloadPaymentTypes** | Pointer to **[]string** |  | [optional] 
**FiscalFolioProfile** | Pointer to **string** | Payment types associated with Fiscal Partner. | [optional] 
**FiscalPayloadTypes** | Pointer to [**[]FiscalPayloadType**](FiscalPayloadType.md) | Types of payload supported by the Fiscal Partner. | [optional] 
**FolioRequired** | Pointer to **bool** | Indicates if the folio PDF is required by the partner or not. | [optional] 

## Methods

### NewFiscalPartnerType

`func NewFiscalPartnerType() *FiscalPartnerType`

NewFiscalPartnerType instantiates a new FiscalPartnerType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFiscalPartnerTypeWithDefaults

`func NewFiscalPartnerTypeWithDefaults() *FiscalPartnerType`

NewFiscalPartnerTypeWithDefaults instantiates a new FiscalPartnerType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *FiscalPartnerType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *FiscalPartnerType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *FiscalPartnerType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *FiscalPartnerType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetPartnerCode

`func (o *FiscalPartnerType) GetPartnerCode() string`

GetPartnerCode returns the PartnerCode field if non-nil, zero value otherwise.

### GetPartnerCodeOk

`func (o *FiscalPartnerType) GetPartnerCodeOk() (*string, bool)`

GetPartnerCodeOk returns a tuple with the PartnerCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPartnerCode

`func (o *FiscalPartnerType) SetPartnerCode(v string)`

SetPartnerCode sets PartnerCode field to given value.

### HasPartnerCode

`func (o *FiscalPartnerType) HasPartnerCode() bool`

HasPartnerCode returns a boolean if a field has been set.

### GetPriority

`func (o *FiscalPartnerType) GetPriority() int32`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *FiscalPartnerType) GetPriorityOk() (*int32, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *FiscalPartnerType) SetPriority(v int32)`

SetPriority sets Priority field to given value.

### HasPriority

`func (o *FiscalPartnerType) HasPriority() bool`

HasPriority returns a boolean if a field has been set.

### GetPaymentTypes

`func (o *FiscalPartnerType) GetPaymentTypes() []string`

GetPaymentTypes returns the PaymentTypes field if non-nil, zero value otherwise.

### GetPaymentTypesOk

`func (o *FiscalPartnerType) GetPaymentTypesOk() (*[]string, bool)`

GetPaymentTypesOk returns a tuple with the PaymentTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentTypes

`func (o *FiscalPartnerType) SetPaymentTypes(v []string)`

SetPaymentTypes sets PaymentTypes field to given value.

### HasPaymentTypes

`func (o *FiscalPartnerType) HasPaymentTypes() bool`

HasPaymentTypes returns a boolean if a field has been set.

### GetPayloadPaymentTypes

`func (o *FiscalPartnerType) GetPayloadPaymentTypes() []string`

GetPayloadPaymentTypes returns the PayloadPaymentTypes field if non-nil, zero value otherwise.

### GetPayloadPaymentTypesOk

`func (o *FiscalPartnerType) GetPayloadPaymentTypesOk() (*[]string, bool)`

GetPayloadPaymentTypesOk returns a tuple with the PayloadPaymentTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayloadPaymentTypes

`func (o *FiscalPartnerType) SetPayloadPaymentTypes(v []string)`

SetPayloadPaymentTypes sets PayloadPaymentTypes field to given value.

### HasPayloadPaymentTypes

`func (o *FiscalPartnerType) HasPayloadPaymentTypes() bool`

HasPayloadPaymentTypes returns a boolean if a field has been set.

### GetFiscalFolioProfile

`func (o *FiscalPartnerType) GetFiscalFolioProfile() string`

GetFiscalFolioProfile returns the FiscalFolioProfile field if non-nil, zero value otherwise.

### GetFiscalFolioProfileOk

`func (o *FiscalPartnerType) GetFiscalFolioProfileOk() (*string, bool)`

GetFiscalFolioProfileOk returns a tuple with the FiscalFolioProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalFolioProfile

`func (o *FiscalPartnerType) SetFiscalFolioProfile(v string)`

SetFiscalFolioProfile sets FiscalFolioProfile field to given value.

### HasFiscalFolioProfile

`func (o *FiscalPartnerType) HasFiscalFolioProfile() bool`

HasFiscalFolioProfile returns a boolean if a field has been set.

### GetFiscalPayloadTypes

`func (o *FiscalPartnerType) GetFiscalPayloadTypes() []FiscalPayloadType`

GetFiscalPayloadTypes returns the FiscalPayloadTypes field if non-nil, zero value otherwise.

### GetFiscalPayloadTypesOk

`func (o *FiscalPartnerType) GetFiscalPayloadTypesOk() (*[]FiscalPayloadType, bool)`

GetFiscalPayloadTypesOk returns a tuple with the FiscalPayloadTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalPayloadTypes

`func (o *FiscalPartnerType) SetFiscalPayloadTypes(v []FiscalPayloadType)`

SetFiscalPayloadTypes sets FiscalPayloadTypes field to given value.

### HasFiscalPayloadTypes

`func (o *FiscalPartnerType) HasFiscalPayloadTypes() bool`

HasFiscalPayloadTypes returns a boolean if a field has been set.

### GetFolioRequired

`func (o *FiscalPartnerType) GetFolioRequired() bool`

GetFolioRequired returns the FolioRequired field if non-nil, zero value otherwise.

### GetFolioRequiredOk

`func (o *FiscalPartnerType) GetFolioRequiredOk() (*bool, bool)`

GetFolioRequiredOk returns a tuple with the FolioRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioRequired

`func (o *FiscalPartnerType) SetFolioRequired(v bool)`

SetFolioRequired sets FolioRequired field to given value.

### HasFolioRequired

`func (o *FiscalPartnerType) HasFolioRequired() bool`

HasFolioRequired returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


