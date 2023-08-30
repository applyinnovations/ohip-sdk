# PostEnrollmentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EnrollmentInfo** | Pointer to [**ProfileEnrollmentType**](ProfileEnrollmentType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 

## Methods

### NewPostEnrollmentRequest

`func NewPostEnrollmentRequest() *PostEnrollmentRequest`

NewPostEnrollmentRequest instantiates a new PostEnrollmentRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostEnrollmentRequestWithDefaults

`func NewPostEnrollmentRequestWithDefaults() *PostEnrollmentRequest`

NewPostEnrollmentRequestWithDefaults instantiates a new PostEnrollmentRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnrollmentInfo

`func (o *PostEnrollmentRequest) GetEnrollmentInfo() ProfileEnrollmentType`

GetEnrollmentInfo returns the EnrollmentInfo field if non-nil, zero value otherwise.

### GetEnrollmentInfoOk

`func (o *PostEnrollmentRequest) GetEnrollmentInfoOk() (*ProfileEnrollmentType, bool)`

GetEnrollmentInfoOk returns a tuple with the EnrollmentInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnrollmentInfo

`func (o *PostEnrollmentRequest) SetEnrollmentInfo(v ProfileEnrollmentType)`

SetEnrollmentInfo sets EnrollmentInfo field to given value.

### HasEnrollmentInfo

`func (o *PostEnrollmentRequest) HasEnrollmentInfo() bool`

HasEnrollmentInfo returns a boolean if a field has been set.

### GetLinks

`func (o *PostEnrollmentRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostEnrollmentRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostEnrollmentRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostEnrollmentRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


