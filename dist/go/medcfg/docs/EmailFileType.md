# EmailFileType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EmailFile** | Pointer to **string** | File attachment in base64 binary format | [optional] 
**EmailFileName** | Pointer to **string** | Name of the attachment | [optional] 
**EmailID** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 

## Methods

### NewEmailFileType

`func NewEmailFileType() *EmailFileType`

NewEmailFileType instantiates a new EmailFileType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEmailFileTypeWithDefaults

`func NewEmailFileTypeWithDefaults() *EmailFileType`

NewEmailFileTypeWithDefaults instantiates a new EmailFileType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmailFile

`func (o *EmailFileType) GetEmailFile() string`

GetEmailFile returns the EmailFile field if non-nil, zero value otherwise.

### GetEmailFileOk

`func (o *EmailFileType) GetEmailFileOk() (*string, bool)`

GetEmailFileOk returns a tuple with the EmailFile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailFile

`func (o *EmailFileType) SetEmailFile(v string)`

SetEmailFile sets EmailFile field to given value.

### HasEmailFile

`func (o *EmailFileType) HasEmailFile() bool`

HasEmailFile returns a boolean if a field has been set.

### GetEmailFileName

`func (o *EmailFileType) GetEmailFileName() string`

GetEmailFileName returns the EmailFileName field if non-nil, zero value otherwise.

### GetEmailFileNameOk

`func (o *EmailFileType) GetEmailFileNameOk() (*string, bool)`

GetEmailFileNameOk returns a tuple with the EmailFileName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailFileName

`func (o *EmailFileType) SetEmailFileName(v string)`

SetEmailFileName sets EmailFileName field to given value.

### HasEmailFileName

`func (o *EmailFileType) HasEmailFileName() bool`

HasEmailFileName returns a boolean if a field has been set.

### GetEmailID

`func (o *EmailFileType) GetEmailID() UniqueIDType`

GetEmailID returns the EmailID field if non-nil, zero value otherwise.

### GetEmailIDOk

`func (o *EmailFileType) GetEmailIDOk() (*UniqueIDType, bool)`

GetEmailIDOk returns a tuple with the EmailID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailID

`func (o *EmailFileType) SetEmailID(v UniqueIDType)`

SetEmailID sets EmailID field to given value.

### HasEmailID

`func (o *EmailFileType) HasEmailID() bool`

HasEmailID returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


