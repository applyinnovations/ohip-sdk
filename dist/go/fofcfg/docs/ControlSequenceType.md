# ControlSequenceType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ControlCode** | Pointer to [**ControlSequenceCodeType**](ControlSequenceCodeType.md) |  | [optional] 
**CountryCode** | Pointer to **string** | Opera Control Sequence belongs to country | [optional] 
**FolioType** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Control Sequence code associated with Hotel | [optional] 
**Maximum** | Pointer to **float32** | Maximum value of Opera Control Sequence | [optional] 
**Minimum** | Pointer to **float32** | Minimum value of Opera Control Sequence | [optional] 
**SequenceValue** | Pointer to **float32** | Current Sequence Value for the OPERA Sequence | [optional] 

## Methods

### NewControlSequenceType

`func NewControlSequenceType() *ControlSequenceType`

NewControlSequenceType instantiates a new ControlSequenceType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewControlSequenceTypeWithDefaults

`func NewControlSequenceTypeWithDefaults() *ControlSequenceType`

NewControlSequenceTypeWithDefaults instantiates a new ControlSequenceType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetControlCode

`func (o *ControlSequenceType) GetControlCode() ControlSequenceCodeType`

GetControlCode returns the ControlCode field if non-nil, zero value otherwise.

### GetControlCodeOk

`func (o *ControlSequenceType) GetControlCodeOk() (*ControlSequenceCodeType, bool)`

GetControlCodeOk returns a tuple with the ControlCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetControlCode

`func (o *ControlSequenceType) SetControlCode(v ControlSequenceCodeType)`

SetControlCode sets ControlCode field to given value.

### HasControlCode

`func (o *ControlSequenceType) HasControlCode() bool`

HasControlCode returns a boolean if a field has been set.

### GetCountryCode

`func (o *ControlSequenceType) GetCountryCode() string`

GetCountryCode returns the CountryCode field if non-nil, zero value otherwise.

### GetCountryCodeOk

`func (o *ControlSequenceType) GetCountryCodeOk() (*string, bool)`

GetCountryCodeOk returns a tuple with the CountryCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountryCode

`func (o *ControlSequenceType) SetCountryCode(v string)`

SetCountryCode sets CountryCode field to given value.

### HasCountryCode

`func (o *ControlSequenceType) HasCountryCode() bool`

HasCountryCode returns a boolean if a field has been set.

### GetFolioType

`func (o *ControlSequenceType) GetFolioType() CodeDescriptionType`

GetFolioType returns the FolioType field if non-nil, zero value otherwise.

### GetFolioTypeOk

`func (o *ControlSequenceType) GetFolioTypeOk() (*CodeDescriptionType, bool)`

GetFolioTypeOk returns a tuple with the FolioType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioType

`func (o *ControlSequenceType) SetFolioType(v CodeDescriptionType)`

SetFolioType sets FolioType field to given value.

### HasFolioType

`func (o *ControlSequenceType) HasFolioType() bool`

HasFolioType returns a boolean if a field has been set.

### GetHotelId

`func (o *ControlSequenceType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ControlSequenceType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ControlSequenceType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ControlSequenceType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetMaximum

`func (o *ControlSequenceType) GetMaximum() float32`

GetMaximum returns the Maximum field if non-nil, zero value otherwise.

### GetMaximumOk

`func (o *ControlSequenceType) GetMaximumOk() (*float32, bool)`

GetMaximumOk returns a tuple with the Maximum field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaximum

`func (o *ControlSequenceType) SetMaximum(v float32)`

SetMaximum sets Maximum field to given value.

### HasMaximum

`func (o *ControlSequenceType) HasMaximum() bool`

HasMaximum returns a boolean if a field has been set.

### GetMinimum

`func (o *ControlSequenceType) GetMinimum() float32`

GetMinimum returns the Minimum field if non-nil, zero value otherwise.

### GetMinimumOk

`func (o *ControlSequenceType) GetMinimumOk() (*float32, bool)`

GetMinimumOk returns a tuple with the Minimum field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinimum

`func (o *ControlSequenceType) SetMinimum(v float32)`

SetMinimum sets Minimum field to given value.

### HasMinimum

`func (o *ControlSequenceType) HasMinimum() bool`

HasMinimum returns a boolean if a field has been set.

### GetSequenceValue

`func (o *ControlSequenceType) GetSequenceValue() float32`

GetSequenceValue returns the SequenceValue field if non-nil, zero value otherwise.

### GetSequenceValueOk

`func (o *ControlSequenceType) GetSequenceValueOk() (*float32, bool)`

GetSequenceValueOk returns a tuple with the SequenceValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequenceValue

`func (o *ControlSequenceType) SetSequenceValue(v float32)`

SetSequenceValue sets SequenceValue field to given value.

### HasSequenceValue

`func (o *ControlSequenceType) HasSequenceValue() bool`

HasSequenceValue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


