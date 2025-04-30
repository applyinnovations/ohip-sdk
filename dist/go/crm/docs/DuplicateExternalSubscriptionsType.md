# DuplicateExternalSubscriptionsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**DatabaseId** | Pointer to **string** | Code identifying the external database record which is linked to external systems. | [optional] 
**ProfileSubscriptions** | Pointer to [**[]ProfileSubscriptionType**](ProfileSubscriptionType.md) | Details of the OPERA Profile subscription to external system | [optional] 

## Methods

### NewDuplicateExternalSubscriptionsType

`func NewDuplicateExternalSubscriptionsType() *DuplicateExternalSubscriptionsType`

NewDuplicateExternalSubscriptionsType instantiates a new DuplicateExternalSubscriptionsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDuplicateExternalSubscriptionsTypeWithDefaults

`func NewDuplicateExternalSubscriptionsTypeWithDefaults() *DuplicateExternalSubscriptionsType`

NewDuplicateExternalSubscriptionsTypeWithDefaults instantiates a new DuplicateExternalSubscriptionsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileId

`func (o *DuplicateExternalSubscriptionsType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *DuplicateExternalSubscriptionsType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *DuplicateExternalSubscriptionsType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *DuplicateExternalSubscriptionsType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetDatabaseId

`func (o *DuplicateExternalSubscriptionsType) GetDatabaseId() string`

GetDatabaseId returns the DatabaseId field if non-nil, zero value otherwise.

### GetDatabaseIdOk

`func (o *DuplicateExternalSubscriptionsType) GetDatabaseIdOk() (*string, bool)`

GetDatabaseIdOk returns a tuple with the DatabaseId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatabaseId

`func (o *DuplicateExternalSubscriptionsType) SetDatabaseId(v string)`

SetDatabaseId sets DatabaseId field to given value.

### HasDatabaseId

`func (o *DuplicateExternalSubscriptionsType) HasDatabaseId() bool`

HasDatabaseId returns a boolean if a field has been set.

### GetProfileSubscriptions

`func (o *DuplicateExternalSubscriptionsType) GetProfileSubscriptions() []ProfileSubscriptionType`

GetProfileSubscriptions returns the ProfileSubscriptions field if non-nil, zero value otherwise.

### GetProfileSubscriptionsOk

`func (o *DuplicateExternalSubscriptionsType) GetProfileSubscriptionsOk() (*[]ProfileSubscriptionType, bool)`

GetProfileSubscriptionsOk returns a tuple with the ProfileSubscriptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileSubscriptions

`func (o *DuplicateExternalSubscriptionsType) SetProfileSubscriptions(v []ProfileSubscriptionType)`

SetProfileSubscriptions sets ProfileSubscriptions field to given value.

### HasProfileSubscriptions

`func (o *DuplicateExternalSubscriptionsType) HasProfileSubscriptions() bool`

HasProfileSubscriptions returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


