# ExchangeProfileMatchRuleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Threshold** | Pointer to **float32** | Threshold level of Match Point Criteria. | [optional] 
**PointCriteria** | Pointer to [**[]CriterionType**](CriterionType.md) | Type that represents Criteria such as match attributes, points and Active Flag to match profiles. | [optional] 
**InterfaceId** | Pointer to **string** | Interface for which the rules are configured. | [optional] 
**HotelId** | Pointer to **string** | Hotel for which the rules are configured. | [optional] 
**ProfileType** | Pointer to [**ExchangeProfileTypeType**](ExchangeProfileTypeType.md) |  | [optional] 
**Active** | Pointer to **bool** | The activation flag for the rule by itself. | [optional] 

## Methods

### NewExchangeProfileMatchRuleType

`func NewExchangeProfileMatchRuleType() *ExchangeProfileMatchRuleType`

NewExchangeProfileMatchRuleType instantiates a new ExchangeProfileMatchRuleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExchangeProfileMatchRuleTypeWithDefaults

`func NewExchangeProfileMatchRuleTypeWithDefaults() *ExchangeProfileMatchRuleType`

NewExchangeProfileMatchRuleTypeWithDefaults instantiates a new ExchangeProfileMatchRuleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetThreshold

`func (o *ExchangeProfileMatchRuleType) GetThreshold() float32`

GetThreshold returns the Threshold field if non-nil, zero value otherwise.

### GetThresholdOk

`func (o *ExchangeProfileMatchRuleType) GetThresholdOk() (*float32, bool)`

GetThresholdOk returns a tuple with the Threshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThreshold

`func (o *ExchangeProfileMatchRuleType) SetThreshold(v float32)`

SetThreshold sets Threshold field to given value.

### HasThreshold

`func (o *ExchangeProfileMatchRuleType) HasThreshold() bool`

HasThreshold returns a boolean if a field has been set.

### GetPointCriteria

`func (o *ExchangeProfileMatchRuleType) GetPointCriteria() []CriterionType`

GetPointCriteria returns the PointCriteria field if non-nil, zero value otherwise.

### GetPointCriteriaOk

`func (o *ExchangeProfileMatchRuleType) GetPointCriteriaOk() (*[]CriterionType, bool)`

GetPointCriteriaOk returns a tuple with the PointCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointCriteria

`func (o *ExchangeProfileMatchRuleType) SetPointCriteria(v []CriterionType)`

SetPointCriteria sets PointCriteria field to given value.

### HasPointCriteria

`func (o *ExchangeProfileMatchRuleType) HasPointCriteria() bool`

HasPointCriteria returns a boolean if a field has been set.

### GetInterfaceId

`func (o *ExchangeProfileMatchRuleType) GetInterfaceId() string`

GetInterfaceId returns the InterfaceId field if non-nil, zero value otherwise.

### GetInterfaceIdOk

`func (o *ExchangeProfileMatchRuleType) GetInterfaceIdOk() (*string, bool)`

GetInterfaceIdOk returns a tuple with the InterfaceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceId

`func (o *ExchangeProfileMatchRuleType) SetInterfaceId(v string)`

SetInterfaceId sets InterfaceId field to given value.

### HasInterfaceId

`func (o *ExchangeProfileMatchRuleType) HasInterfaceId() bool`

HasInterfaceId returns a boolean if a field has been set.

### GetHotelId

`func (o *ExchangeProfileMatchRuleType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ExchangeProfileMatchRuleType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ExchangeProfileMatchRuleType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ExchangeProfileMatchRuleType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetProfileType

`func (o *ExchangeProfileMatchRuleType) GetProfileType() ExchangeProfileTypeType`

GetProfileType returns the ProfileType field if non-nil, zero value otherwise.

### GetProfileTypeOk

`func (o *ExchangeProfileMatchRuleType) GetProfileTypeOk() (*ExchangeProfileTypeType, bool)`

GetProfileTypeOk returns a tuple with the ProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileType

`func (o *ExchangeProfileMatchRuleType) SetProfileType(v ExchangeProfileTypeType)`

SetProfileType sets ProfileType field to given value.

### HasProfileType

`func (o *ExchangeProfileMatchRuleType) HasProfileType() bool`

HasProfileType returns a boolean if a field has been set.

### GetActive

`func (o *ExchangeProfileMatchRuleType) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ExchangeProfileMatchRuleType) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ExchangeProfileMatchRuleType) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *ExchangeProfileMatchRuleType) HasActive() bool`

HasActive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


