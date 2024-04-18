# Enrollment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EnrollmentInfo** | Pointer to [**ProfileEnrollmentType**](ProfileEnrollmentType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewEnrollment

`func NewEnrollment() *Enrollment`

NewEnrollment instantiates a new Enrollment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEnrollmentWithDefaults

`func NewEnrollmentWithDefaults() *Enrollment`

NewEnrollmentWithDefaults instantiates a new Enrollment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnrollmentInfo

`func (o *Enrollment) GetEnrollmentInfo() ProfileEnrollmentType`

GetEnrollmentInfo returns the EnrollmentInfo field if non-nil, zero value otherwise.

### GetEnrollmentInfoOk

`func (o *Enrollment) GetEnrollmentInfoOk() (*ProfileEnrollmentType, bool)`

GetEnrollmentInfoOk returns a tuple with the EnrollmentInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnrollmentInfo

`func (o *Enrollment) SetEnrollmentInfo(v ProfileEnrollmentType)`

SetEnrollmentInfo sets EnrollmentInfo field to given value.

### HasEnrollmentInfo

`func (o *Enrollment) HasEnrollmentInfo() bool`

HasEnrollmentInfo returns a boolean if a field has been set.

### GetLinks

`func (o *Enrollment) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Enrollment) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Enrollment) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Enrollment) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *Enrollment) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Enrollment) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Enrollment) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *Enrollment) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

