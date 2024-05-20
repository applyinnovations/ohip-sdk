# RelationshipProfileSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Address** | Pointer to [**RelationshipAddressType**](RelationshipAddressType.md) |  | [optional] 
**CompanyName** | Pointer to **string** | Name of the company. | [optional] 
**CustomerName** | Pointer to **string** | Name of the customer | [optional] 
**EmailAddress** | Pointer to **string** | Defines the e-mail address. | [optional] 
**OwnerCode** | Pointer to **string** | Unique Code to identify the owner. | [optional] 
**Primary** | Pointer to **bool** | Indicates if this relationship is the primary relationship. | [optional] 
**PrimaryOwnerCode** | Pointer to **bool** | When true, this is a primary owner. | [optional] 
**ProfileIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ProfileStatus** | Pointer to [**ProfileStatusType**](ProfileStatusType.md) |  | [optional] 
**ProfileType** | Pointer to [**ProfileTypeType**](ProfileTypeType.md) |  | [optional] 
**TelephoneNumber** | Pointer to **string** | Telephone number assigned to a single location | [optional] 

## Methods

### NewRelationshipProfileSummaryType

`func NewRelationshipProfileSummaryType() *RelationshipProfileSummaryType`

NewRelationshipProfileSummaryType instantiates a new RelationshipProfileSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRelationshipProfileSummaryTypeWithDefaults

`func NewRelationshipProfileSummaryTypeWithDefaults() *RelationshipProfileSummaryType`

NewRelationshipProfileSummaryTypeWithDefaults instantiates a new RelationshipProfileSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddress

`func (o *RelationshipProfileSummaryType) GetAddress() RelationshipAddressType`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *RelationshipProfileSummaryType) GetAddressOk() (*RelationshipAddressType, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *RelationshipProfileSummaryType) SetAddress(v RelationshipAddressType)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *RelationshipProfileSummaryType) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### GetCompanyName

`func (o *RelationshipProfileSummaryType) GetCompanyName() string`

GetCompanyName returns the CompanyName field if non-nil, zero value otherwise.

### GetCompanyNameOk

`func (o *RelationshipProfileSummaryType) GetCompanyNameOk() (*string, bool)`

GetCompanyNameOk returns a tuple with the CompanyName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompanyName

`func (o *RelationshipProfileSummaryType) SetCompanyName(v string)`

SetCompanyName sets CompanyName field to given value.

### HasCompanyName

`func (o *RelationshipProfileSummaryType) HasCompanyName() bool`

HasCompanyName returns a boolean if a field has been set.

### GetCustomerName

`func (o *RelationshipProfileSummaryType) GetCustomerName() string`

GetCustomerName returns the CustomerName field if non-nil, zero value otherwise.

### GetCustomerNameOk

`func (o *RelationshipProfileSummaryType) GetCustomerNameOk() (*string, bool)`

GetCustomerNameOk returns a tuple with the CustomerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerName

`func (o *RelationshipProfileSummaryType) SetCustomerName(v string)`

SetCustomerName sets CustomerName field to given value.

### HasCustomerName

`func (o *RelationshipProfileSummaryType) HasCustomerName() bool`

HasCustomerName returns a boolean if a field has been set.

### GetEmailAddress

`func (o *RelationshipProfileSummaryType) GetEmailAddress() string`

GetEmailAddress returns the EmailAddress field if non-nil, zero value otherwise.

### GetEmailAddressOk

`func (o *RelationshipProfileSummaryType) GetEmailAddressOk() (*string, bool)`

GetEmailAddressOk returns a tuple with the EmailAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailAddress

`func (o *RelationshipProfileSummaryType) SetEmailAddress(v string)`

SetEmailAddress sets EmailAddress field to given value.

### HasEmailAddress

`func (o *RelationshipProfileSummaryType) HasEmailAddress() bool`

HasEmailAddress returns a boolean if a field has been set.

### GetOwnerCode

`func (o *RelationshipProfileSummaryType) GetOwnerCode() string`

GetOwnerCode returns the OwnerCode field if non-nil, zero value otherwise.

### GetOwnerCodeOk

`func (o *RelationshipProfileSummaryType) GetOwnerCodeOk() (*string, bool)`

GetOwnerCodeOk returns a tuple with the OwnerCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerCode

`func (o *RelationshipProfileSummaryType) SetOwnerCode(v string)`

SetOwnerCode sets OwnerCode field to given value.

### HasOwnerCode

`func (o *RelationshipProfileSummaryType) HasOwnerCode() bool`

HasOwnerCode returns a boolean if a field has been set.

### GetPrimary

`func (o *RelationshipProfileSummaryType) GetPrimary() bool`

GetPrimary returns the Primary field if non-nil, zero value otherwise.

### GetPrimaryOk

`func (o *RelationshipProfileSummaryType) GetPrimaryOk() (*bool, bool)`

GetPrimaryOk returns a tuple with the Primary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimary

`func (o *RelationshipProfileSummaryType) SetPrimary(v bool)`

SetPrimary sets Primary field to given value.

### HasPrimary

`func (o *RelationshipProfileSummaryType) HasPrimary() bool`

HasPrimary returns a boolean if a field has been set.

### GetPrimaryOwnerCode

`func (o *RelationshipProfileSummaryType) GetPrimaryOwnerCode() bool`

GetPrimaryOwnerCode returns the PrimaryOwnerCode field if non-nil, zero value otherwise.

### GetPrimaryOwnerCodeOk

`func (o *RelationshipProfileSummaryType) GetPrimaryOwnerCodeOk() (*bool, bool)`

GetPrimaryOwnerCodeOk returns a tuple with the PrimaryOwnerCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryOwnerCode

`func (o *RelationshipProfileSummaryType) SetPrimaryOwnerCode(v bool)`

SetPrimaryOwnerCode sets PrimaryOwnerCode field to given value.

### HasPrimaryOwnerCode

`func (o *RelationshipProfileSummaryType) HasPrimaryOwnerCode() bool`

HasPrimaryOwnerCode returns a boolean if a field has been set.

### GetProfileIdList

`func (o *RelationshipProfileSummaryType) GetProfileIdList() []UniqueIDType`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *RelationshipProfileSummaryType) GetProfileIdListOk() (*[]UniqueIDType, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *RelationshipProfileSummaryType) SetProfileIdList(v []UniqueIDType)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *RelationshipProfileSummaryType) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.

### GetProfileStatus

`func (o *RelationshipProfileSummaryType) GetProfileStatus() ProfileStatusType`

GetProfileStatus returns the ProfileStatus field if non-nil, zero value otherwise.

### GetProfileStatusOk

`func (o *RelationshipProfileSummaryType) GetProfileStatusOk() (*ProfileStatusType, bool)`

GetProfileStatusOk returns a tuple with the ProfileStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileStatus

`func (o *RelationshipProfileSummaryType) SetProfileStatus(v ProfileStatusType)`

SetProfileStatus sets ProfileStatus field to given value.

### HasProfileStatus

`func (o *RelationshipProfileSummaryType) HasProfileStatus() bool`

HasProfileStatus returns a boolean if a field has been set.

### GetProfileType

`func (o *RelationshipProfileSummaryType) GetProfileType() ProfileTypeType`

GetProfileType returns the ProfileType field if non-nil, zero value otherwise.

### GetProfileTypeOk

`func (o *RelationshipProfileSummaryType) GetProfileTypeOk() (*ProfileTypeType, bool)`

GetProfileTypeOk returns a tuple with the ProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileType

`func (o *RelationshipProfileSummaryType) SetProfileType(v ProfileTypeType)`

SetProfileType sets ProfileType field to given value.

### HasProfileType

`func (o *RelationshipProfileSummaryType) HasProfileType() bool`

HasProfileType returns a boolean if a field has been set.

### GetTelephoneNumber

`func (o *RelationshipProfileSummaryType) GetTelephoneNumber() string`

GetTelephoneNumber returns the TelephoneNumber field if non-nil, zero value otherwise.

### GetTelephoneNumberOk

`func (o *RelationshipProfileSummaryType) GetTelephoneNumberOk() (*string, bool)`

GetTelephoneNumberOk returns a tuple with the TelephoneNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTelephoneNumber

`func (o *RelationshipProfileSummaryType) SetTelephoneNumber(v string)`

SetTelephoneNumber sets TelephoneNumber field to given value.

### HasTelephoneNumber

`func (o *RelationshipProfileSummaryType) HasTelephoneNumber() bool`

HasTelephoneNumber returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


