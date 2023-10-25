# AnonymizationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AnonymizationDate** | Pointer to **string** | Date and Time when the guest was anonymized. | [optional] 
**AnonymizationStatus** | Pointer to [**AnonymizationStatusType**](AnonymizationStatusType.md) |  | [optional] 

## Methods

### NewAnonymizationType

`func NewAnonymizationType() *AnonymizationType`

NewAnonymizationType instantiates a new AnonymizationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAnonymizationTypeWithDefaults

`func NewAnonymizationTypeWithDefaults() *AnonymizationType`

NewAnonymizationTypeWithDefaults instantiates a new AnonymizationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAnonymizationDate

`func (o *AnonymizationType) GetAnonymizationDate() string`

GetAnonymizationDate returns the AnonymizationDate field if non-nil, zero value otherwise.

### GetAnonymizationDateOk

`func (o *AnonymizationType) GetAnonymizationDateOk() (*string, bool)`

GetAnonymizationDateOk returns a tuple with the AnonymizationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnonymizationDate

`func (o *AnonymizationType) SetAnonymizationDate(v string)`

SetAnonymizationDate sets AnonymizationDate field to given value.

### HasAnonymizationDate

`func (o *AnonymizationType) HasAnonymizationDate() bool`

HasAnonymizationDate returns a boolean if a field has been set.

### GetAnonymizationStatus

`func (o *AnonymizationType) GetAnonymizationStatus() AnonymizationStatusType`

GetAnonymizationStatus returns the AnonymizationStatus field if non-nil, zero value otherwise.

### GetAnonymizationStatusOk

`func (o *AnonymizationType) GetAnonymizationStatusOk() (*AnonymizationStatusType, bool)`

GetAnonymizationStatusOk returns a tuple with the AnonymizationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnonymizationStatus

`func (o *AnonymizationType) SetAnonymizationStatus(v AnonymizationStatusType)`

SetAnonymizationStatus sets AnonymizationStatus field to given value.

### HasAnonymizationStatus

`func (o *AnonymizationType) HasAnonymizationStatus() bool`

HasAnonymizationStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


