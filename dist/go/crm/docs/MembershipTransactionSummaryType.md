# MembershipTransactionSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TransactionInfo** | Pointer to [**MembershipTransactionInfoType**](MembershipTransactionInfoType.md) |  | [optional] 
**PointsCalculated** | Pointer to **bool** | Flag to indicate if points are calculated. | [optional] 
**AwardPoints** | Pointer to **int32** | Award Points. | [optional] 
**TierPoints** | Pointer to [**MembershipTierPointsType**](MembershipTierPointsType.md) |  | [optional] 
**UserName** | Pointer to **string** | User who inserted or updated the record. | [optional] 
**Url** | Pointer to **string** | URL that identifies the location associated with the record identified by the UniqueID. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 
**Instance** | Pointer to **string** | The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated. | [optional] 
**IdContext** | Pointer to **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**IdExtension** | Pointer to **int32** | Additional identifying value assigned by the creating system. | [optional] 

## Methods

### NewMembershipTransactionSummaryType

`func NewMembershipTransactionSummaryType() *MembershipTransactionSummaryType`

NewMembershipTransactionSummaryType instantiates a new MembershipTransactionSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipTransactionSummaryTypeWithDefaults

`func NewMembershipTransactionSummaryTypeWithDefaults() *MembershipTransactionSummaryType`

NewMembershipTransactionSummaryTypeWithDefaults instantiates a new MembershipTransactionSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactionInfo

`func (o *MembershipTransactionSummaryType) GetTransactionInfo() MembershipTransactionInfoType`

GetTransactionInfo returns the TransactionInfo field if non-nil, zero value otherwise.

### GetTransactionInfoOk

`func (o *MembershipTransactionSummaryType) GetTransactionInfoOk() (*MembershipTransactionInfoType, bool)`

GetTransactionInfoOk returns a tuple with the TransactionInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionInfo

`func (o *MembershipTransactionSummaryType) SetTransactionInfo(v MembershipTransactionInfoType)`

SetTransactionInfo sets TransactionInfo field to given value.

### HasTransactionInfo

`func (o *MembershipTransactionSummaryType) HasTransactionInfo() bool`

HasTransactionInfo returns a boolean if a field has been set.

### GetPointsCalculated

`func (o *MembershipTransactionSummaryType) GetPointsCalculated() bool`

GetPointsCalculated returns the PointsCalculated field if non-nil, zero value otherwise.

### GetPointsCalculatedOk

`func (o *MembershipTransactionSummaryType) GetPointsCalculatedOk() (*bool, bool)`

GetPointsCalculatedOk returns a tuple with the PointsCalculated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsCalculated

`func (o *MembershipTransactionSummaryType) SetPointsCalculated(v bool)`

SetPointsCalculated sets PointsCalculated field to given value.

### HasPointsCalculated

`func (o *MembershipTransactionSummaryType) HasPointsCalculated() bool`

HasPointsCalculated returns a boolean if a field has been set.

### GetAwardPoints

`func (o *MembershipTransactionSummaryType) GetAwardPoints() int32`

GetAwardPoints returns the AwardPoints field if non-nil, zero value otherwise.

### GetAwardPointsOk

`func (o *MembershipTransactionSummaryType) GetAwardPointsOk() (*int32, bool)`

GetAwardPointsOk returns a tuple with the AwardPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardPoints

`func (o *MembershipTransactionSummaryType) SetAwardPoints(v int32)`

SetAwardPoints sets AwardPoints field to given value.

### HasAwardPoints

`func (o *MembershipTransactionSummaryType) HasAwardPoints() bool`

HasAwardPoints returns a boolean if a field has been set.

### GetTierPoints

`func (o *MembershipTransactionSummaryType) GetTierPoints() MembershipTierPointsType`

GetTierPoints returns the TierPoints field if non-nil, zero value otherwise.

### GetTierPointsOk

`func (o *MembershipTransactionSummaryType) GetTierPointsOk() (*MembershipTierPointsType, bool)`

GetTierPointsOk returns a tuple with the TierPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTierPoints

`func (o *MembershipTransactionSummaryType) SetTierPoints(v MembershipTierPointsType)`

SetTierPoints sets TierPoints field to given value.

### HasTierPoints

`func (o *MembershipTransactionSummaryType) HasTierPoints() bool`

HasTierPoints returns a boolean if a field has been set.

### GetUserName

`func (o *MembershipTransactionSummaryType) GetUserName() string`

GetUserName returns the UserName field if non-nil, zero value otherwise.

### GetUserNameOk

`func (o *MembershipTransactionSummaryType) GetUserNameOk() (*string, bool)`

GetUserNameOk returns a tuple with the UserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserName

`func (o *MembershipTransactionSummaryType) SetUserName(v string)`

SetUserName sets UserName field to given value.

### HasUserName

`func (o *MembershipTransactionSummaryType) HasUserName() bool`

HasUserName returns a boolean if a field has been set.

### GetUrl

`func (o *MembershipTransactionSummaryType) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *MembershipTransactionSummaryType) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *MembershipTransactionSummaryType) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *MembershipTransactionSummaryType) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetType

`func (o *MembershipTransactionSummaryType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *MembershipTransactionSummaryType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *MembershipTransactionSummaryType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *MembershipTransactionSummaryType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetInstance

`func (o *MembershipTransactionSummaryType) GetInstance() string`

GetInstance returns the Instance field if non-nil, zero value otherwise.

### GetInstanceOk

`func (o *MembershipTransactionSummaryType) GetInstanceOk() (*string, bool)`

GetInstanceOk returns a tuple with the Instance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstance

`func (o *MembershipTransactionSummaryType) SetInstance(v string)`

SetInstance sets Instance field to given value.

### HasInstance

`func (o *MembershipTransactionSummaryType) HasInstance() bool`

HasInstance returns a boolean if a field has been set.

### GetIdContext

`func (o *MembershipTransactionSummaryType) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *MembershipTransactionSummaryType) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *MembershipTransactionSummaryType) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *MembershipTransactionSummaryType) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.

### GetId

`func (o *MembershipTransactionSummaryType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MembershipTransactionSummaryType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MembershipTransactionSummaryType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *MembershipTransactionSummaryType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIdExtension

`func (o *MembershipTransactionSummaryType) GetIdExtension() int32`

GetIdExtension returns the IdExtension field if non-nil, zero value otherwise.

### GetIdExtensionOk

`func (o *MembershipTransactionSummaryType) GetIdExtensionOk() (*int32, bool)`

GetIdExtensionOk returns a tuple with the IdExtension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdExtension

`func (o *MembershipTransactionSummaryType) SetIdExtension(v int32)`

SetIdExtension sets IdExtension field to given value.

### HasIdExtension

`func (o *MembershipTransactionSummaryType) HasIdExtension() bool`

HasIdExtension returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


