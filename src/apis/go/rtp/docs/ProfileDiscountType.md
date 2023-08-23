# ProfileDiscountType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DateRangeDetails** | Pointer to [**TimeSpanDaysOfWeekType**](TimeSpanDaysOfWeekType.md) |  | [optional] 
**DiscAmount** | Pointer to [**ProfileDiscountTypeDiscAmount**](ProfileDiscountTypeDiscAmount.md) |  | [optional] 
**Url** | Pointer to **string** | URL that identifies the location associated with the record identified by the UniqueID. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 
**Instance** | Pointer to **string** | The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated. | [optional] 
**IdContext** | Pointer to **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**IdExtension** | Pointer to **int32** | Additional identifying value assigned by the creating system. | [optional] 

## Methods

### NewProfileDiscountType

`func NewProfileDiscountType() *ProfileDiscountType`

NewProfileDiscountType instantiates a new ProfileDiscountType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileDiscountTypeWithDefaults

`func NewProfileDiscountTypeWithDefaults() *ProfileDiscountType`

NewProfileDiscountTypeWithDefaults instantiates a new ProfileDiscountType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDateRangeDetails

`func (o *ProfileDiscountType) GetDateRangeDetails() TimeSpanDaysOfWeekType`

GetDateRangeDetails returns the DateRangeDetails field if non-nil, zero value otherwise.

### GetDateRangeDetailsOk

`func (o *ProfileDiscountType) GetDateRangeDetailsOk() (*TimeSpanDaysOfWeekType, bool)`

GetDateRangeDetailsOk returns a tuple with the DateRangeDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateRangeDetails

`func (o *ProfileDiscountType) SetDateRangeDetails(v TimeSpanDaysOfWeekType)`

SetDateRangeDetails sets DateRangeDetails field to given value.

### HasDateRangeDetails

`func (o *ProfileDiscountType) HasDateRangeDetails() bool`

HasDateRangeDetails returns a boolean if a field has been set.

### GetDiscAmount

`func (o *ProfileDiscountType) GetDiscAmount() ProfileDiscountTypeDiscAmount`

GetDiscAmount returns the DiscAmount field if non-nil, zero value otherwise.

### GetDiscAmountOk

`func (o *ProfileDiscountType) GetDiscAmountOk() (*ProfileDiscountTypeDiscAmount, bool)`

GetDiscAmountOk returns a tuple with the DiscAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscAmount

`func (o *ProfileDiscountType) SetDiscAmount(v ProfileDiscountTypeDiscAmount)`

SetDiscAmount sets DiscAmount field to given value.

### HasDiscAmount

`func (o *ProfileDiscountType) HasDiscAmount() bool`

HasDiscAmount returns a boolean if a field has been set.

### GetUrl

`func (o *ProfileDiscountType) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *ProfileDiscountType) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *ProfileDiscountType) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *ProfileDiscountType) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetType

`func (o *ProfileDiscountType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ProfileDiscountType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ProfileDiscountType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ProfileDiscountType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetInstance

`func (o *ProfileDiscountType) GetInstance() string`

GetInstance returns the Instance field if non-nil, zero value otherwise.

### GetInstanceOk

`func (o *ProfileDiscountType) GetInstanceOk() (*string, bool)`

GetInstanceOk returns a tuple with the Instance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstance

`func (o *ProfileDiscountType) SetInstance(v string)`

SetInstance sets Instance field to given value.

### HasInstance

`func (o *ProfileDiscountType) HasInstance() bool`

HasInstance returns a boolean if a field has been set.

### GetIdContext

`func (o *ProfileDiscountType) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *ProfileDiscountType) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *ProfileDiscountType) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *ProfileDiscountType) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.

### GetId

`func (o *ProfileDiscountType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ProfileDiscountType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ProfileDiscountType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ProfileDiscountType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIdExtension

`func (o *ProfileDiscountType) GetIdExtension() int32`

GetIdExtension returns the IdExtension field if non-nil, zero value otherwise.

### GetIdExtensionOk

`func (o *ProfileDiscountType) GetIdExtensionOk() (*int32, bool)`

GetIdExtensionOk returns a tuple with the IdExtension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdExtension

`func (o *ProfileDiscountType) SetIdExtension(v int32)`

SetIdExtension sets IdExtension field to given value.

### HasIdExtension

`func (o *ProfileDiscountType) HasIdExtension() bool`

HasIdExtension returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


