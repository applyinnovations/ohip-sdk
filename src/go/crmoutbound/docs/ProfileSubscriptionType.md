# ProfileSubscriptionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**ExternalProfileId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ProfileInfo** | Pointer to [**ProfileSubscriptionTypeProfileInfo**](ProfileSubscriptionTypeProfileInfo.md) |  | [optional] 
**Distributed** | Pointer to **bool** | Indicates if the profile was distributed to the external system. | [optional] 
**Force** | Pointer to **bool** | Indicates if the profile information should be overwritten by the external system. | [optional] 
**SubscriptionDate** | Pointer to **string** | Timestamp when the profile was subscribed to. | [optional] 
**LastDistributionDate** | Pointer to **string** | Timestamp of the most recent distribution of this profile to the external system. | [optional] 
**LastExternalUpdateDate** | Pointer to **string** | Timestamp of the most recent update of the subscription information by the external system. | [optional] 
**Inactive** | Pointer to **bool** | Indicates whether this subscription is active or inactive. | [optional] 

## Methods

### NewProfileSubscriptionType

`func NewProfileSubscriptionType() *ProfileSubscriptionType`

NewProfileSubscriptionType instantiates a new ProfileSubscriptionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileSubscriptionTypeWithDefaults

`func NewProfileSubscriptionTypeWithDefaults() *ProfileSubscriptionType`

NewProfileSubscriptionTypeWithDefaults instantiates a new ProfileSubscriptionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileId

`func (o *ProfileSubscriptionType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *ProfileSubscriptionType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *ProfileSubscriptionType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *ProfileSubscriptionType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetExternalProfileId

`func (o *ProfileSubscriptionType) GetExternalProfileId() UniqueIDType`

GetExternalProfileId returns the ExternalProfileId field if non-nil, zero value otherwise.

### GetExternalProfileIdOk

`func (o *ProfileSubscriptionType) GetExternalProfileIdOk() (*UniqueIDType, bool)`

GetExternalProfileIdOk returns a tuple with the ExternalProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalProfileId

`func (o *ProfileSubscriptionType) SetExternalProfileId(v UniqueIDType)`

SetExternalProfileId sets ExternalProfileId field to given value.

### HasExternalProfileId

`func (o *ProfileSubscriptionType) HasExternalProfileId() bool`

HasExternalProfileId returns a boolean if a field has been set.

### GetProfileInfo

`func (o *ProfileSubscriptionType) GetProfileInfo() ProfileSubscriptionTypeProfileInfo`

GetProfileInfo returns the ProfileInfo field if non-nil, zero value otherwise.

### GetProfileInfoOk

`func (o *ProfileSubscriptionType) GetProfileInfoOk() (*ProfileSubscriptionTypeProfileInfo, bool)`

GetProfileInfoOk returns a tuple with the ProfileInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileInfo

`func (o *ProfileSubscriptionType) SetProfileInfo(v ProfileSubscriptionTypeProfileInfo)`

SetProfileInfo sets ProfileInfo field to given value.

### HasProfileInfo

`func (o *ProfileSubscriptionType) HasProfileInfo() bool`

HasProfileInfo returns a boolean if a field has been set.

### GetDistributed

`func (o *ProfileSubscriptionType) GetDistributed() bool`

GetDistributed returns the Distributed field if non-nil, zero value otherwise.

### GetDistributedOk

`func (o *ProfileSubscriptionType) GetDistributedOk() (*bool, bool)`

GetDistributedOk returns a tuple with the Distributed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDistributed

`func (o *ProfileSubscriptionType) SetDistributed(v bool)`

SetDistributed sets Distributed field to given value.

### HasDistributed

`func (o *ProfileSubscriptionType) HasDistributed() bool`

HasDistributed returns a boolean if a field has been set.

### GetForce

`func (o *ProfileSubscriptionType) GetForce() bool`

GetForce returns the Force field if non-nil, zero value otherwise.

### GetForceOk

`func (o *ProfileSubscriptionType) GetForceOk() (*bool, bool)`

GetForceOk returns a tuple with the Force field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForce

`func (o *ProfileSubscriptionType) SetForce(v bool)`

SetForce sets Force field to given value.

### HasForce

`func (o *ProfileSubscriptionType) HasForce() bool`

HasForce returns a boolean if a field has been set.

### GetSubscriptionDate

`func (o *ProfileSubscriptionType) GetSubscriptionDate() string`

GetSubscriptionDate returns the SubscriptionDate field if non-nil, zero value otherwise.

### GetSubscriptionDateOk

`func (o *ProfileSubscriptionType) GetSubscriptionDateOk() (*string, bool)`

GetSubscriptionDateOk returns a tuple with the SubscriptionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscriptionDate

`func (o *ProfileSubscriptionType) SetSubscriptionDate(v string)`

SetSubscriptionDate sets SubscriptionDate field to given value.

### HasSubscriptionDate

`func (o *ProfileSubscriptionType) HasSubscriptionDate() bool`

HasSubscriptionDate returns a boolean if a field has been set.

### GetLastDistributionDate

`func (o *ProfileSubscriptionType) GetLastDistributionDate() string`

GetLastDistributionDate returns the LastDistributionDate field if non-nil, zero value otherwise.

### GetLastDistributionDateOk

`func (o *ProfileSubscriptionType) GetLastDistributionDateOk() (*string, bool)`

GetLastDistributionDateOk returns a tuple with the LastDistributionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastDistributionDate

`func (o *ProfileSubscriptionType) SetLastDistributionDate(v string)`

SetLastDistributionDate sets LastDistributionDate field to given value.

### HasLastDistributionDate

`func (o *ProfileSubscriptionType) HasLastDistributionDate() bool`

HasLastDistributionDate returns a boolean if a field has been set.

### GetLastExternalUpdateDate

`func (o *ProfileSubscriptionType) GetLastExternalUpdateDate() string`

GetLastExternalUpdateDate returns the LastExternalUpdateDate field if non-nil, zero value otherwise.

### GetLastExternalUpdateDateOk

`func (o *ProfileSubscriptionType) GetLastExternalUpdateDateOk() (*string, bool)`

GetLastExternalUpdateDateOk returns a tuple with the LastExternalUpdateDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastExternalUpdateDate

`func (o *ProfileSubscriptionType) SetLastExternalUpdateDate(v string)`

SetLastExternalUpdateDate sets LastExternalUpdateDate field to given value.

### HasLastExternalUpdateDate

`func (o *ProfileSubscriptionType) HasLastExternalUpdateDate() bool`

HasLastExternalUpdateDate returns a boolean if a field has been set.

### GetInactive

`func (o *ProfileSubscriptionType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *ProfileSubscriptionType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *ProfileSubscriptionType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *ProfileSubscriptionType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


