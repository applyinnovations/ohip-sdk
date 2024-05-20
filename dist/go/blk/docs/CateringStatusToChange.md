# CateringStatusToChange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChangeCateringStatus** | Pointer to [**ChangeCateringStatusType**](ChangeCateringStatusType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**VerificationOnly** | Pointer to **bool** | Indicator if the request is a verification on whether the catering status can be changed. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCateringStatusToChange

`func NewCateringStatusToChange() *CateringStatusToChange`

NewCateringStatusToChange instantiates a new CateringStatusToChange object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringStatusToChangeWithDefaults

`func NewCateringStatusToChangeWithDefaults() *CateringStatusToChange`

NewCateringStatusToChangeWithDefaults instantiates a new CateringStatusToChange object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChangeCateringStatus

`func (o *CateringStatusToChange) GetChangeCateringStatus() ChangeCateringStatusType`

GetChangeCateringStatus returns the ChangeCateringStatus field if non-nil, zero value otherwise.

### GetChangeCateringStatusOk

`func (o *CateringStatusToChange) GetChangeCateringStatusOk() (*ChangeCateringStatusType, bool)`

GetChangeCateringStatusOk returns a tuple with the ChangeCateringStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChangeCateringStatus

`func (o *CateringStatusToChange) SetChangeCateringStatus(v ChangeCateringStatusType)`

SetChangeCateringStatus sets ChangeCateringStatus field to given value.

### HasChangeCateringStatus

`func (o *CateringStatusToChange) HasChangeCateringStatus() bool`

HasChangeCateringStatus returns a boolean if a field has been set.

### GetLinks

`func (o *CateringStatusToChange) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CateringStatusToChange) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CateringStatusToChange) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CateringStatusToChange) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetVerificationOnly

`func (o *CateringStatusToChange) GetVerificationOnly() bool`

GetVerificationOnly returns the VerificationOnly field if non-nil, zero value otherwise.

### GetVerificationOnlyOk

`func (o *CateringStatusToChange) GetVerificationOnlyOk() (*bool, bool)`

GetVerificationOnlyOk returns a tuple with the VerificationOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVerificationOnly

`func (o *CateringStatusToChange) SetVerificationOnly(v bool)`

SetVerificationOnly sets VerificationOnly field to given value.

### HasVerificationOnly

`func (o *CateringStatusToChange) HasVerificationOnly() bool`

HasVerificationOnly returns a boolean if a field has been set.

### GetWarnings

`func (o *CateringStatusToChange) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CateringStatusToChange) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CateringStatusToChange) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CateringStatusToChange) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


