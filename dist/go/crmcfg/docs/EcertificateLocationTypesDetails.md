# EcertificateLocationTypesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EcertificateLocationTypes** | Pointer to [**[]EcertificateLocationTypeType**](EcertificateLocationTypeType.md) | List of Ecertificate Location Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewEcertificateLocationTypesDetails

`func NewEcertificateLocationTypesDetails() *EcertificateLocationTypesDetails`

NewEcertificateLocationTypesDetails instantiates a new EcertificateLocationTypesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEcertificateLocationTypesDetailsWithDefaults

`func NewEcertificateLocationTypesDetailsWithDefaults() *EcertificateLocationTypesDetails`

NewEcertificateLocationTypesDetailsWithDefaults instantiates a new EcertificateLocationTypesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEcertificateLocationTypes

`func (o *EcertificateLocationTypesDetails) GetEcertificateLocationTypes() []EcertificateLocationTypeType`

GetEcertificateLocationTypes returns the EcertificateLocationTypes field if non-nil, zero value otherwise.

### GetEcertificateLocationTypesOk

`func (o *EcertificateLocationTypesDetails) GetEcertificateLocationTypesOk() (*[]EcertificateLocationTypeType, bool)`

GetEcertificateLocationTypesOk returns a tuple with the EcertificateLocationTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEcertificateLocationTypes

`func (o *EcertificateLocationTypesDetails) SetEcertificateLocationTypes(v []EcertificateLocationTypeType)`

SetEcertificateLocationTypes sets EcertificateLocationTypes field to given value.

### HasEcertificateLocationTypes

`func (o *EcertificateLocationTypesDetails) HasEcertificateLocationTypes() bool`

HasEcertificateLocationTypes returns a boolean if a field has been set.

### GetLinks

`func (o *EcertificateLocationTypesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *EcertificateLocationTypesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *EcertificateLocationTypesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *EcertificateLocationTypesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *EcertificateLocationTypesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *EcertificateLocationTypesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *EcertificateLocationTypesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *EcertificateLocationTypesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


