# IdentificationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExpirationDate** | Pointer to **string** | Expiration date of Identification. | [optional] 
**IdNumber** | Pointer to **string** | Identification Number. | [optional] 
**IdNumberMasked** | Pointer to **string** | Masked Identification Number. | [optional] 
**IdType** | Pointer to **string** | Identification Type. Eg Passport, Driving License etc. | [optional] 
**IssuedCountry** | Pointer to **string** | The country where Identification was issued. | [optional] 
**IssuedDate** | Pointer to **string** | Issued date of Identification. | [optional] 
**IssuedPlace** | Pointer to **string** | The place where Identification was issued. | [optional] 
**OrderSequence** | Pointer to **float32** | Display Order sequence. | [optional] 
**PrimaryInd** | Pointer to **bool** | When true, indicates a primary information. | [optional] 
**RegisteredProperty** | Pointer to **string** | Property where the identification belongs to. | [optional] 

## Methods

### NewIdentificationType

`func NewIdentificationType() *IdentificationType`

NewIdentificationType instantiates a new IdentificationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentificationTypeWithDefaults

`func NewIdentificationTypeWithDefaults() *IdentificationType`

NewIdentificationTypeWithDefaults instantiates a new IdentificationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExpirationDate

`func (o *IdentificationType) GetExpirationDate() string`

GetExpirationDate returns the ExpirationDate field if non-nil, zero value otherwise.

### GetExpirationDateOk

`func (o *IdentificationType) GetExpirationDateOk() (*string, bool)`

GetExpirationDateOk returns a tuple with the ExpirationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpirationDate

`func (o *IdentificationType) SetExpirationDate(v string)`

SetExpirationDate sets ExpirationDate field to given value.

### HasExpirationDate

`func (o *IdentificationType) HasExpirationDate() bool`

HasExpirationDate returns a boolean if a field has been set.

### GetIdNumber

`func (o *IdentificationType) GetIdNumber() string`

GetIdNumber returns the IdNumber field if non-nil, zero value otherwise.

### GetIdNumberOk

`func (o *IdentificationType) GetIdNumberOk() (*string, bool)`

GetIdNumberOk returns a tuple with the IdNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdNumber

`func (o *IdentificationType) SetIdNumber(v string)`

SetIdNumber sets IdNumber field to given value.

### HasIdNumber

`func (o *IdentificationType) HasIdNumber() bool`

HasIdNumber returns a boolean if a field has been set.

### GetIdNumberMasked

`func (o *IdentificationType) GetIdNumberMasked() string`

GetIdNumberMasked returns the IdNumberMasked field if non-nil, zero value otherwise.

### GetIdNumberMaskedOk

`func (o *IdentificationType) GetIdNumberMaskedOk() (*string, bool)`

GetIdNumberMaskedOk returns a tuple with the IdNumberMasked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdNumberMasked

`func (o *IdentificationType) SetIdNumberMasked(v string)`

SetIdNumberMasked sets IdNumberMasked field to given value.

### HasIdNumberMasked

`func (o *IdentificationType) HasIdNumberMasked() bool`

HasIdNumberMasked returns a boolean if a field has been set.

### GetIdType

`func (o *IdentificationType) GetIdType() string`

GetIdType returns the IdType field if non-nil, zero value otherwise.

### GetIdTypeOk

`func (o *IdentificationType) GetIdTypeOk() (*string, bool)`

GetIdTypeOk returns a tuple with the IdType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdType

`func (o *IdentificationType) SetIdType(v string)`

SetIdType sets IdType field to given value.

### HasIdType

`func (o *IdentificationType) HasIdType() bool`

HasIdType returns a boolean if a field has been set.

### GetIssuedCountry

`func (o *IdentificationType) GetIssuedCountry() string`

GetIssuedCountry returns the IssuedCountry field if non-nil, zero value otherwise.

### GetIssuedCountryOk

`func (o *IdentificationType) GetIssuedCountryOk() (*string, bool)`

GetIssuedCountryOk returns a tuple with the IssuedCountry field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssuedCountry

`func (o *IdentificationType) SetIssuedCountry(v string)`

SetIssuedCountry sets IssuedCountry field to given value.

### HasIssuedCountry

`func (o *IdentificationType) HasIssuedCountry() bool`

HasIssuedCountry returns a boolean if a field has been set.

### GetIssuedDate

`func (o *IdentificationType) GetIssuedDate() string`

GetIssuedDate returns the IssuedDate field if non-nil, zero value otherwise.

### GetIssuedDateOk

`func (o *IdentificationType) GetIssuedDateOk() (*string, bool)`

GetIssuedDateOk returns a tuple with the IssuedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssuedDate

`func (o *IdentificationType) SetIssuedDate(v string)`

SetIssuedDate sets IssuedDate field to given value.

### HasIssuedDate

`func (o *IdentificationType) HasIssuedDate() bool`

HasIssuedDate returns a boolean if a field has been set.

### GetIssuedPlace

`func (o *IdentificationType) GetIssuedPlace() string`

GetIssuedPlace returns the IssuedPlace field if non-nil, zero value otherwise.

### GetIssuedPlaceOk

`func (o *IdentificationType) GetIssuedPlaceOk() (*string, bool)`

GetIssuedPlaceOk returns a tuple with the IssuedPlace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssuedPlace

`func (o *IdentificationType) SetIssuedPlace(v string)`

SetIssuedPlace sets IssuedPlace field to given value.

### HasIssuedPlace

`func (o *IdentificationType) HasIssuedPlace() bool`

HasIssuedPlace returns a boolean if a field has been set.

### GetOrderSequence

`func (o *IdentificationType) GetOrderSequence() float32`

GetOrderSequence returns the OrderSequence field if non-nil, zero value otherwise.

### GetOrderSequenceOk

`func (o *IdentificationType) GetOrderSequenceOk() (*float32, bool)`

GetOrderSequenceOk returns a tuple with the OrderSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderSequence

`func (o *IdentificationType) SetOrderSequence(v float32)`

SetOrderSequence sets OrderSequence field to given value.

### HasOrderSequence

`func (o *IdentificationType) HasOrderSequence() bool`

HasOrderSequence returns a boolean if a field has been set.

### GetPrimaryInd

`func (o *IdentificationType) GetPrimaryInd() bool`

GetPrimaryInd returns the PrimaryInd field if non-nil, zero value otherwise.

### GetPrimaryIndOk

`func (o *IdentificationType) GetPrimaryIndOk() (*bool, bool)`

GetPrimaryIndOk returns a tuple with the PrimaryInd field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryInd

`func (o *IdentificationType) SetPrimaryInd(v bool)`

SetPrimaryInd sets PrimaryInd field to given value.

### HasPrimaryInd

`func (o *IdentificationType) HasPrimaryInd() bool`

HasPrimaryInd returns a boolean if a field has been set.

### GetRegisteredProperty

`func (o *IdentificationType) GetRegisteredProperty() string`

GetRegisteredProperty returns the RegisteredProperty field if non-nil, zero value otherwise.

### GetRegisteredPropertyOk

`func (o *IdentificationType) GetRegisteredPropertyOk() (*string, bool)`

GetRegisteredPropertyOk returns a tuple with the RegisteredProperty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegisteredProperty

`func (o *IdentificationType) SetRegisteredProperty(v string)`

SetRegisteredProperty sets RegisteredProperty field to given value.

### HasRegisteredProperty

`func (o *IdentificationType) HasRegisteredProperty() bool`

HasRegisteredProperty returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


