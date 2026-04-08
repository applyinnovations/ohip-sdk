# ECertificateConsumptionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property where certificate was consumed for. | [optional] 
**Source** | Pointer to [**ECertificateConsumeSourceType**](ECertificateConsumeSourceType.md) |  | [optional] 
**Surname** | Pointer to **string** | Last name of the person who consumed the certificate.. | [optional] 
**FirstName** | Pointer to **string** | First name of the person who consumed the certificate. | [optional] 
**MiddleName** | Pointer to **string** | Middle name of the person who consumed the certificate. | [optional] 
**Email** | Pointer to **string** | Email of the person who consumed the certificate. | [optional] 
**Date** | Pointer to **string** | Date the certificate was consumed. | [optional] 
**UserName** | Pointer to **string** | Application user who created the consumption. | [optional] 
**ReferenceId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 

## Methods

### NewECertificateConsumptionType

`func NewECertificateConsumptionType() *ECertificateConsumptionType`

NewECertificateConsumptionType instantiates a new ECertificateConsumptionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewECertificateConsumptionTypeWithDefaults

`func NewECertificateConsumptionTypeWithDefaults() *ECertificateConsumptionType`

NewECertificateConsumptionTypeWithDefaults instantiates a new ECertificateConsumptionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ECertificateConsumptionType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ECertificateConsumptionType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ECertificateConsumptionType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ECertificateConsumptionType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetSource

`func (o *ECertificateConsumptionType) GetSource() ECertificateConsumeSourceType`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *ECertificateConsumptionType) GetSourceOk() (*ECertificateConsumeSourceType, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *ECertificateConsumptionType) SetSource(v ECertificateConsumeSourceType)`

SetSource sets Source field to given value.

### HasSource

`func (o *ECertificateConsumptionType) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetSurname

`func (o *ECertificateConsumptionType) GetSurname() string`

GetSurname returns the Surname field if non-nil, zero value otherwise.

### GetSurnameOk

`func (o *ECertificateConsumptionType) GetSurnameOk() (*string, bool)`

GetSurnameOk returns a tuple with the Surname field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSurname

`func (o *ECertificateConsumptionType) SetSurname(v string)`

SetSurname sets Surname field to given value.

### HasSurname

`func (o *ECertificateConsumptionType) HasSurname() bool`

HasSurname returns a boolean if a field has been set.

### GetFirstName

`func (o *ECertificateConsumptionType) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *ECertificateConsumptionType) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *ECertificateConsumptionType) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.

### HasFirstName

`func (o *ECertificateConsumptionType) HasFirstName() bool`

HasFirstName returns a boolean if a field has been set.

### GetMiddleName

`func (o *ECertificateConsumptionType) GetMiddleName() string`

GetMiddleName returns the MiddleName field if non-nil, zero value otherwise.

### GetMiddleNameOk

`func (o *ECertificateConsumptionType) GetMiddleNameOk() (*string, bool)`

GetMiddleNameOk returns a tuple with the MiddleName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMiddleName

`func (o *ECertificateConsumptionType) SetMiddleName(v string)`

SetMiddleName sets MiddleName field to given value.

### HasMiddleName

`func (o *ECertificateConsumptionType) HasMiddleName() bool`

HasMiddleName returns a boolean if a field has been set.

### GetEmail

`func (o *ECertificateConsumptionType) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *ECertificateConsumptionType) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *ECertificateConsumptionType) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *ECertificateConsumptionType) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetDate

`func (o *ECertificateConsumptionType) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *ECertificateConsumptionType) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *ECertificateConsumptionType) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *ECertificateConsumptionType) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetUserName

`func (o *ECertificateConsumptionType) GetUserName() string`

GetUserName returns the UserName field if non-nil, zero value otherwise.

### GetUserNameOk

`func (o *ECertificateConsumptionType) GetUserNameOk() (*string, bool)`

GetUserNameOk returns a tuple with the UserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserName

`func (o *ECertificateConsumptionType) SetUserName(v string)`

SetUserName sets UserName field to given value.

### HasUserName

`func (o *ECertificateConsumptionType) HasUserName() bool`

HasUserName returns a boolean if a field has been set.

### GetReferenceId

`func (o *ECertificateConsumptionType) GetReferenceId() UniqueIDType`

GetReferenceId returns the ReferenceId field if non-nil, zero value otherwise.

### GetReferenceIdOk

`func (o *ECertificateConsumptionType) GetReferenceIdOk() (*UniqueIDType, bool)`

GetReferenceIdOk returns a tuple with the ReferenceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferenceId

`func (o *ECertificateConsumptionType) SetReferenceId(v UniqueIDType)`

SetReferenceId sets ReferenceId field to given value.

### HasReferenceId

`func (o *ECertificateConsumptionType) HasReferenceId() bool`

HasReferenceId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


