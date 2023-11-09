# ExternalProfileSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FormerName** | Pointer to [**ExternalProfileSummaryTypeFormerName**](ExternalProfileSummaryTypeFormerName.md) |  | [optional] 
**AddressInfo** | Pointer to [**AddressInfoType**](AddressInfoType.md) |  | [optional] 
**TelephoneInfo** | Pointer to [**TelephoneInfoType**](TelephoneInfoType.md) |  | [optional] 
**EmailInfo** | Pointer to [**EmailInfoType**](EmailInfoType.md) |  | [optional] 
**ProfileMembership** | Pointer to [**ProfileMembershipType**](ProfileMembershipType.md) |  | [optional] 
**UrlInfo** | Pointer to [**URLInfoType**](URLInfoType.md) |  | [optional] 
**Owners** | Pointer to [**OwnersType**](OwnersType.md) |  | [optional] 
**ProfileType** | Pointer to [**ProfileTypeType**](ProfileTypeType.md) |  | [optional] 
**StatusCode** | Pointer to [**ProfileStatusType**](ProfileStatusType.md) |  | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**RegisteredProperty** | Pointer to **string** | Property this profile is registered with. | [optional] 

## Methods

### NewExternalProfileSummaryType

`func NewExternalProfileSummaryType() *ExternalProfileSummaryType`

NewExternalProfileSummaryType instantiates a new ExternalProfileSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExternalProfileSummaryTypeWithDefaults

`func NewExternalProfileSummaryTypeWithDefaults() *ExternalProfileSummaryType`

NewExternalProfileSummaryTypeWithDefaults instantiates a new ExternalProfileSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFormerName

`func (o *ExternalProfileSummaryType) GetFormerName() ExternalProfileSummaryTypeFormerName`

GetFormerName returns the FormerName field if non-nil, zero value otherwise.

### GetFormerNameOk

`func (o *ExternalProfileSummaryType) GetFormerNameOk() (*ExternalProfileSummaryTypeFormerName, bool)`

GetFormerNameOk returns a tuple with the FormerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormerName

`func (o *ExternalProfileSummaryType) SetFormerName(v ExternalProfileSummaryTypeFormerName)`

SetFormerName sets FormerName field to given value.

### HasFormerName

`func (o *ExternalProfileSummaryType) HasFormerName() bool`

HasFormerName returns a boolean if a field has been set.

### GetAddressInfo

`func (o *ExternalProfileSummaryType) GetAddressInfo() AddressInfoType`

GetAddressInfo returns the AddressInfo field if non-nil, zero value otherwise.

### GetAddressInfoOk

`func (o *ExternalProfileSummaryType) GetAddressInfoOk() (*AddressInfoType, bool)`

GetAddressInfoOk returns a tuple with the AddressInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddressInfo

`func (o *ExternalProfileSummaryType) SetAddressInfo(v AddressInfoType)`

SetAddressInfo sets AddressInfo field to given value.

### HasAddressInfo

`func (o *ExternalProfileSummaryType) HasAddressInfo() bool`

HasAddressInfo returns a boolean if a field has been set.

### GetTelephoneInfo

`func (o *ExternalProfileSummaryType) GetTelephoneInfo() TelephoneInfoType`

GetTelephoneInfo returns the TelephoneInfo field if non-nil, zero value otherwise.

### GetTelephoneInfoOk

`func (o *ExternalProfileSummaryType) GetTelephoneInfoOk() (*TelephoneInfoType, bool)`

GetTelephoneInfoOk returns a tuple with the TelephoneInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTelephoneInfo

`func (o *ExternalProfileSummaryType) SetTelephoneInfo(v TelephoneInfoType)`

SetTelephoneInfo sets TelephoneInfo field to given value.

### HasTelephoneInfo

`func (o *ExternalProfileSummaryType) HasTelephoneInfo() bool`

HasTelephoneInfo returns a boolean if a field has been set.

### GetEmailInfo

`func (o *ExternalProfileSummaryType) GetEmailInfo() EmailInfoType`

GetEmailInfo returns the EmailInfo field if non-nil, zero value otherwise.

### GetEmailInfoOk

`func (o *ExternalProfileSummaryType) GetEmailInfoOk() (*EmailInfoType, bool)`

GetEmailInfoOk returns a tuple with the EmailInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailInfo

`func (o *ExternalProfileSummaryType) SetEmailInfo(v EmailInfoType)`

SetEmailInfo sets EmailInfo field to given value.

### HasEmailInfo

`func (o *ExternalProfileSummaryType) HasEmailInfo() bool`

HasEmailInfo returns a boolean if a field has been set.

### GetProfileMembership

`func (o *ExternalProfileSummaryType) GetProfileMembership() ProfileMembershipType`

GetProfileMembership returns the ProfileMembership field if non-nil, zero value otherwise.

### GetProfileMembershipOk

`func (o *ExternalProfileSummaryType) GetProfileMembershipOk() (*ProfileMembershipType, bool)`

GetProfileMembershipOk returns a tuple with the ProfileMembership field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileMembership

`func (o *ExternalProfileSummaryType) SetProfileMembership(v ProfileMembershipType)`

SetProfileMembership sets ProfileMembership field to given value.

### HasProfileMembership

`func (o *ExternalProfileSummaryType) HasProfileMembership() bool`

HasProfileMembership returns a boolean if a field has been set.

### GetUrlInfo

`func (o *ExternalProfileSummaryType) GetUrlInfo() URLInfoType`

GetUrlInfo returns the UrlInfo field if non-nil, zero value otherwise.

### GetUrlInfoOk

`func (o *ExternalProfileSummaryType) GetUrlInfoOk() (*URLInfoType, bool)`

GetUrlInfoOk returns a tuple with the UrlInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrlInfo

`func (o *ExternalProfileSummaryType) SetUrlInfo(v URLInfoType)`

SetUrlInfo sets UrlInfo field to given value.

### HasUrlInfo

`func (o *ExternalProfileSummaryType) HasUrlInfo() bool`

HasUrlInfo returns a boolean if a field has been set.

### GetOwners

`func (o *ExternalProfileSummaryType) GetOwners() OwnersType`

GetOwners returns the Owners field if non-nil, zero value otherwise.

### GetOwnersOk

`func (o *ExternalProfileSummaryType) GetOwnersOk() (*OwnersType, bool)`

GetOwnersOk returns a tuple with the Owners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwners

`func (o *ExternalProfileSummaryType) SetOwners(v OwnersType)`

SetOwners sets Owners field to given value.

### HasOwners

`func (o *ExternalProfileSummaryType) HasOwners() bool`

HasOwners returns a boolean if a field has been set.

### GetProfileType

`func (o *ExternalProfileSummaryType) GetProfileType() ProfileTypeType`

GetProfileType returns the ProfileType field if non-nil, zero value otherwise.

### GetProfileTypeOk

`func (o *ExternalProfileSummaryType) GetProfileTypeOk() (*ProfileTypeType, bool)`

GetProfileTypeOk returns a tuple with the ProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileType

`func (o *ExternalProfileSummaryType) SetProfileType(v ProfileTypeType)`

SetProfileType sets ProfileType field to given value.

### HasProfileType

`func (o *ExternalProfileSummaryType) HasProfileType() bool`

HasProfileType returns a boolean if a field has been set.

### GetStatusCode

`func (o *ExternalProfileSummaryType) GetStatusCode() ProfileStatusType`

GetStatusCode returns the StatusCode field if non-nil, zero value otherwise.

### GetStatusCodeOk

`func (o *ExternalProfileSummaryType) GetStatusCodeOk() (*ProfileStatusType, bool)`

GetStatusCodeOk returns a tuple with the StatusCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusCode

`func (o *ExternalProfileSummaryType) SetStatusCode(v ProfileStatusType)`

SetStatusCode sets StatusCode field to given value.

### HasStatusCode

`func (o *ExternalProfileSummaryType) HasStatusCode() bool`

HasStatusCode returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *ExternalProfileSummaryType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *ExternalProfileSummaryType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *ExternalProfileSummaryType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *ExternalProfileSummaryType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *ExternalProfileSummaryType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *ExternalProfileSummaryType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *ExternalProfileSummaryType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *ExternalProfileSummaryType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *ExternalProfileSummaryType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *ExternalProfileSummaryType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *ExternalProfileSummaryType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *ExternalProfileSummaryType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastModifierId

`func (o *ExternalProfileSummaryType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *ExternalProfileSummaryType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *ExternalProfileSummaryType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *ExternalProfileSummaryType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetRegisteredProperty

`func (o *ExternalProfileSummaryType) GetRegisteredProperty() string`

GetRegisteredProperty returns the RegisteredProperty field if non-nil, zero value otherwise.

### GetRegisteredPropertyOk

`func (o *ExternalProfileSummaryType) GetRegisteredPropertyOk() (*string, bool)`

GetRegisteredPropertyOk returns a tuple with the RegisteredProperty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegisteredProperty

`func (o *ExternalProfileSummaryType) SetRegisteredProperty(v string)`

SetRegisteredProperty sets RegisteredProperty field to given value.

### HasRegisteredProperty

`func (o *ExternalProfileSummaryType) HasRegisteredProperty() bool`

HasRegisteredProperty returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


