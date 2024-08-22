# AttachCertificate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Awards** | Pointer to [**[]AwardType**](AwardType.md) | List of awards. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAttachCertificate

`func NewAttachCertificate() *AttachCertificate`

NewAttachCertificate instantiates a new AttachCertificate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttachCertificateWithDefaults

`func NewAttachCertificateWithDefaults() *AttachCertificate`

NewAttachCertificateWithDefaults instantiates a new AttachCertificate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAwards

`func (o *AttachCertificate) GetAwards() []AwardType`

GetAwards returns the Awards field if non-nil, zero value otherwise.

### GetAwardsOk

`func (o *AttachCertificate) GetAwardsOk() (*[]AwardType, bool)`

GetAwardsOk returns a tuple with the Awards field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwards

`func (o *AttachCertificate) SetAwards(v []AwardType)`

SetAwards sets Awards field to given value.

### HasAwards

`func (o *AttachCertificate) HasAwards() bool`

HasAwards returns a boolean if a field has been set.

### GetLinks

`func (o *AttachCertificate) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AttachCertificate) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AttachCertificate) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AttachCertificate) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AttachCertificate) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AttachCertificate) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AttachCertificate) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AttachCertificate) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


