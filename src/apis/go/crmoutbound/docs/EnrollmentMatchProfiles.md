# EnrollmentMatchProfiles

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EnrollmentMatchProfilesDetail** | Pointer to [**[]ProfileEnrollmentType**](ProfileEnrollmentType.md) | Provide match profile details for enrollment. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 

## Methods

### NewEnrollmentMatchProfiles

`func NewEnrollmentMatchProfiles() *EnrollmentMatchProfiles`

NewEnrollmentMatchProfiles instantiates a new EnrollmentMatchProfiles object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEnrollmentMatchProfilesWithDefaults

`func NewEnrollmentMatchProfilesWithDefaults() *EnrollmentMatchProfiles`

NewEnrollmentMatchProfilesWithDefaults instantiates a new EnrollmentMatchProfiles object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnrollmentMatchProfilesDetail

`func (o *EnrollmentMatchProfiles) GetEnrollmentMatchProfilesDetail() []ProfileEnrollmentType`

GetEnrollmentMatchProfilesDetail returns the EnrollmentMatchProfilesDetail field if non-nil, zero value otherwise.

### GetEnrollmentMatchProfilesDetailOk

`func (o *EnrollmentMatchProfiles) GetEnrollmentMatchProfilesDetailOk() (*[]ProfileEnrollmentType, bool)`

GetEnrollmentMatchProfilesDetailOk returns a tuple with the EnrollmentMatchProfilesDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnrollmentMatchProfilesDetail

`func (o *EnrollmentMatchProfiles) SetEnrollmentMatchProfilesDetail(v []ProfileEnrollmentType)`

SetEnrollmentMatchProfilesDetail sets EnrollmentMatchProfilesDetail field to given value.

### HasEnrollmentMatchProfilesDetail

`func (o *EnrollmentMatchProfiles) HasEnrollmentMatchProfilesDetail() bool`

HasEnrollmentMatchProfilesDetail returns a boolean if a field has been set.

### GetLinks

`func (o *EnrollmentMatchProfiles) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *EnrollmentMatchProfiles) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *EnrollmentMatchProfiles) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *EnrollmentMatchProfiles) HasLinks() bool`

HasLinks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


