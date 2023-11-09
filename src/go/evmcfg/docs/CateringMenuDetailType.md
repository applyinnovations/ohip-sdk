# CateringMenuDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClassInfo** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**Container** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**Cost** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Course** | Pointer to **string** | Course number defined will be the display order of the Menu Items on the screen and in Banquet Event Order. | [optional] 
**Custom** | Pointer to **bool** | Indicates whether this menu item is custom | [optional] 
**DemandFactor** | Pointer to **string** | Demand Factor of the Menu. | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**DietaryPreferenceList** | Pointer to [**DietaryPrefListType**](DietaryPrefListType.md) |  | [optional] 
**DisplayOrder** | Pointer to **int32** | Defines the Display Order of the menu item class, to which the menu item is attached | [optional] 
**EventTypes** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**HotelId** | Pointer to **string** | The Hotel code which the menu item class belongs to | [optional] 
**Id** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Inactive** | Pointer to **bool** | Check for the status of menu item | [optional] 
**IncludedMenu** | Pointer to **bool** | Return true means, menu as Included in the Menu Price | [optional] 
**IncludedYN** | Pointer to **bool** | Included flag | [optional] 
**ItemConsumption** | Pointer to **bool** | Selection of this notes that the price defined is charged &#39;as-consumed&#39; basis | [optional] 
**Mandatory** | Pointer to **bool** | Return true means, menu as Included in the Menu Price | [optional] 
**MenuName** | Pointer to **string** | Holds the value of Menu name. | [optional] 
**MenuType** | Pointer to [**MenuTypeType**](MenuTypeType.md) |  | [optional] 
**Name1** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**Name2** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**Name3** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**Order** | Pointer to **string** | Order of Menu. | [optional] 
**Origin1** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**Origin2** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**Portion** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**Print** | Pointer to **bool** | check if Print action is required for menu item | [optional] 
**QuickInsertCode** | Pointer to **string** | Article number in Caps of menu item | [optional] 
**ResponsibleDepartments** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**Restriction** | Pointer to **string** | Any particular restriction description in 100 charactera | [optional] 
**RevenueType** | Pointer to **string** | RevenueType of Menu Item | [optional] 
**SalesPrice** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Servings** | Pointer to **int32** | Numeric value of servings of Menu item | [optional] 
**WebBookable** | Pointer to **bool** | Check of Menu Item if it is web bookable | [optional] 
**Year** | Pointer to **int32** | This value is typically the year of the Wine | [optional] 

## Methods

### NewCateringMenuDetailType

`func NewCateringMenuDetailType() *CateringMenuDetailType`

NewCateringMenuDetailType instantiates a new CateringMenuDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringMenuDetailTypeWithDefaults

`func NewCateringMenuDetailTypeWithDefaults() *CateringMenuDetailType`

NewCateringMenuDetailTypeWithDefaults instantiates a new CateringMenuDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClassInfo

`func (o *CateringMenuDetailType) GetClassInfo() CodeDescriptionType`

GetClassInfo returns the ClassInfo field if non-nil, zero value otherwise.

### GetClassInfoOk

`func (o *CateringMenuDetailType) GetClassInfoOk() (*CodeDescriptionType, bool)`

GetClassInfoOk returns a tuple with the ClassInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassInfo

`func (o *CateringMenuDetailType) SetClassInfo(v CodeDescriptionType)`

SetClassInfo sets ClassInfo field to given value.

### HasClassInfo

`func (o *CateringMenuDetailType) HasClassInfo() bool`

HasClassInfo returns a boolean if a field has been set.

### GetContainer

`func (o *CateringMenuDetailType) GetContainer() CodeDescriptionType`

GetContainer returns the Container field if non-nil, zero value otherwise.

### GetContainerOk

`func (o *CateringMenuDetailType) GetContainerOk() (*CodeDescriptionType, bool)`

GetContainerOk returns a tuple with the Container field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContainer

`func (o *CateringMenuDetailType) SetContainer(v CodeDescriptionType)`

SetContainer sets Container field to given value.

### HasContainer

`func (o *CateringMenuDetailType) HasContainer() bool`

HasContainer returns a boolean if a field has been set.

### GetCost

`func (o *CateringMenuDetailType) GetCost() CurrencyAmountType`

GetCost returns the Cost field if non-nil, zero value otherwise.

### GetCostOk

`func (o *CateringMenuDetailType) GetCostOk() (*CurrencyAmountType, bool)`

GetCostOk returns a tuple with the Cost field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCost

`func (o *CateringMenuDetailType) SetCost(v CurrencyAmountType)`

SetCost sets Cost field to given value.

### HasCost

`func (o *CateringMenuDetailType) HasCost() bool`

HasCost returns a boolean if a field has been set.

### GetCourse

`func (o *CateringMenuDetailType) GetCourse() string`

GetCourse returns the Course field if non-nil, zero value otherwise.

### GetCourseOk

`func (o *CateringMenuDetailType) GetCourseOk() (*string, bool)`

GetCourseOk returns a tuple with the Course field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCourse

`func (o *CateringMenuDetailType) SetCourse(v string)`

SetCourse sets Course field to given value.

### HasCourse

`func (o *CateringMenuDetailType) HasCourse() bool`

HasCourse returns a boolean if a field has been set.

### GetCustom

`func (o *CateringMenuDetailType) GetCustom() bool`

GetCustom returns the Custom field if non-nil, zero value otherwise.

### GetCustomOk

`func (o *CateringMenuDetailType) GetCustomOk() (*bool, bool)`

GetCustomOk returns a tuple with the Custom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustom

`func (o *CateringMenuDetailType) SetCustom(v bool)`

SetCustom sets Custom field to given value.

### HasCustom

`func (o *CateringMenuDetailType) HasCustom() bool`

HasCustom returns a boolean if a field has been set.

### GetDemandFactor

`func (o *CateringMenuDetailType) GetDemandFactor() string`

GetDemandFactor returns the DemandFactor field if non-nil, zero value otherwise.

### GetDemandFactorOk

`func (o *CateringMenuDetailType) GetDemandFactorOk() (*string, bool)`

GetDemandFactorOk returns a tuple with the DemandFactor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDemandFactor

`func (o *CateringMenuDetailType) SetDemandFactor(v string)`

SetDemandFactor sets DemandFactor field to given value.

### HasDemandFactor

`func (o *CateringMenuDetailType) HasDemandFactor() bool`

HasDemandFactor returns a boolean if a field has been set.

### GetDescription

`func (o *CateringMenuDetailType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CateringMenuDetailType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CateringMenuDetailType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CateringMenuDetailType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDietaryPreferenceList

`func (o *CateringMenuDetailType) GetDietaryPreferenceList() DietaryPrefListType`

GetDietaryPreferenceList returns the DietaryPreferenceList field if non-nil, zero value otherwise.

### GetDietaryPreferenceListOk

`func (o *CateringMenuDetailType) GetDietaryPreferenceListOk() (*DietaryPrefListType, bool)`

GetDietaryPreferenceListOk returns a tuple with the DietaryPreferenceList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDietaryPreferenceList

`func (o *CateringMenuDetailType) SetDietaryPreferenceList(v DietaryPrefListType)`

SetDietaryPreferenceList sets DietaryPreferenceList field to given value.

### HasDietaryPreferenceList

`func (o *CateringMenuDetailType) HasDietaryPreferenceList() bool`

HasDietaryPreferenceList returns a boolean if a field has been set.

### GetDisplayOrder

`func (o *CateringMenuDetailType) GetDisplayOrder() int32`

GetDisplayOrder returns the DisplayOrder field if non-nil, zero value otherwise.

### GetDisplayOrderOk

`func (o *CateringMenuDetailType) GetDisplayOrderOk() (*int32, bool)`

GetDisplayOrderOk returns a tuple with the DisplayOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayOrder

`func (o *CateringMenuDetailType) SetDisplayOrder(v int32)`

SetDisplayOrder sets DisplayOrder field to given value.

### HasDisplayOrder

`func (o *CateringMenuDetailType) HasDisplayOrder() bool`

HasDisplayOrder returns a boolean if a field has been set.

### GetEventTypes

`func (o *CateringMenuDetailType) GetEventTypes() CodeListType`

GetEventTypes returns the EventTypes field if non-nil, zero value otherwise.

### GetEventTypesOk

`func (o *CateringMenuDetailType) GetEventTypesOk() (*CodeListType, bool)`

GetEventTypesOk returns a tuple with the EventTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventTypes

`func (o *CateringMenuDetailType) SetEventTypes(v CodeListType)`

SetEventTypes sets EventTypes field to given value.

### HasEventTypes

`func (o *CateringMenuDetailType) HasEventTypes() bool`

HasEventTypes returns a boolean if a field has been set.

### GetHotelId

`func (o *CateringMenuDetailType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CateringMenuDetailType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CateringMenuDetailType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CateringMenuDetailType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetId

`func (o *CateringMenuDetailType) GetId() UniqueIDType`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CateringMenuDetailType) GetIdOk() (*UniqueIDType, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CateringMenuDetailType) SetId(v UniqueIDType)`

SetId sets Id field to given value.

### HasId

`func (o *CateringMenuDetailType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetInactive

`func (o *CateringMenuDetailType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *CateringMenuDetailType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *CateringMenuDetailType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *CateringMenuDetailType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetIncludedMenu

`func (o *CateringMenuDetailType) GetIncludedMenu() bool`

GetIncludedMenu returns the IncludedMenu field if non-nil, zero value otherwise.

### GetIncludedMenuOk

`func (o *CateringMenuDetailType) GetIncludedMenuOk() (*bool, bool)`

GetIncludedMenuOk returns a tuple with the IncludedMenu field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludedMenu

`func (o *CateringMenuDetailType) SetIncludedMenu(v bool)`

SetIncludedMenu sets IncludedMenu field to given value.

### HasIncludedMenu

`func (o *CateringMenuDetailType) HasIncludedMenu() bool`

HasIncludedMenu returns a boolean if a field has been set.

### GetIncludedYN

`func (o *CateringMenuDetailType) GetIncludedYN() bool`

GetIncludedYN returns the IncludedYN field if non-nil, zero value otherwise.

### GetIncludedYNOk

`func (o *CateringMenuDetailType) GetIncludedYNOk() (*bool, bool)`

GetIncludedYNOk returns a tuple with the IncludedYN field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludedYN

`func (o *CateringMenuDetailType) SetIncludedYN(v bool)`

SetIncludedYN sets IncludedYN field to given value.

### HasIncludedYN

`func (o *CateringMenuDetailType) HasIncludedYN() bool`

HasIncludedYN returns a boolean if a field has been set.

### GetItemConsumption

`func (o *CateringMenuDetailType) GetItemConsumption() bool`

GetItemConsumption returns the ItemConsumption field if non-nil, zero value otherwise.

### GetItemConsumptionOk

`func (o *CateringMenuDetailType) GetItemConsumptionOk() (*bool, bool)`

GetItemConsumptionOk returns a tuple with the ItemConsumption field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemConsumption

`func (o *CateringMenuDetailType) SetItemConsumption(v bool)`

SetItemConsumption sets ItemConsumption field to given value.

### HasItemConsumption

`func (o *CateringMenuDetailType) HasItemConsumption() bool`

HasItemConsumption returns a boolean if a field has been set.

### GetMandatory

`func (o *CateringMenuDetailType) GetMandatory() bool`

GetMandatory returns the Mandatory field if non-nil, zero value otherwise.

### GetMandatoryOk

`func (o *CateringMenuDetailType) GetMandatoryOk() (*bool, bool)`

GetMandatoryOk returns a tuple with the Mandatory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMandatory

`func (o *CateringMenuDetailType) SetMandatory(v bool)`

SetMandatory sets Mandatory field to given value.

### HasMandatory

`func (o *CateringMenuDetailType) HasMandatory() bool`

HasMandatory returns a boolean if a field has been set.

### GetMenuName

`func (o *CateringMenuDetailType) GetMenuName() string`

GetMenuName returns the MenuName field if non-nil, zero value otherwise.

### GetMenuNameOk

`func (o *CateringMenuDetailType) GetMenuNameOk() (*string, bool)`

GetMenuNameOk returns a tuple with the MenuName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMenuName

`func (o *CateringMenuDetailType) SetMenuName(v string)`

SetMenuName sets MenuName field to given value.

### HasMenuName

`func (o *CateringMenuDetailType) HasMenuName() bool`

HasMenuName returns a boolean if a field has been set.

### GetMenuType

`func (o *CateringMenuDetailType) GetMenuType() MenuTypeType`

GetMenuType returns the MenuType field if non-nil, zero value otherwise.

### GetMenuTypeOk

`func (o *CateringMenuDetailType) GetMenuTypeOk() (*MenuTypeType, bool)`

GetMenuTypeOk returns a tuple with the MenuType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMenuType

`func (o *CateringMenuDetailType) SetMenuType(v MenuTypeType)`

SetMenuType sets MenuType field to given value.

### HasMenuType

`func (o *CateringMenuDetailType) HasMenuType() bool`

HasMenuType returns a boolean if a field has been set.

### GetName1

`func (o *CateringMenuDetailType) GetName1() TranslationTextType2000`

GetName1 returns the Name1 field if non-nil, zero value otherwise.

### GetName1Ok

`func (o *CateringMenuDetailType) GetName1Ok() (*TranslationTextType2000, bool)`

GetName1Ok returns a tuple with the Name1 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName1

`func (o *CateringMenuDetailType) SetName1(v TranslationTextType2000)`

SetName1 sets Name1 field to given value.

### HasName1

`func (o *CateringMenuDetailType) HasName1() bool`

HasName1 returns a boolean if a field has been set.

### GetName2

`func (o *CateringMenuDetailType) GetName2() TranslationTextType2000`

GetName2 returns the Name2 field if non-nil, zero value otherwise.

### GetName2Ok

`func (o *CateringMenuDetailType) GetName2Ok() (*TranslationTextType2000, bool)`

GetName2Ok returns a tuple with the Name2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName2

`func (o *CateringMenuDetailType) SetName2(v TranslationTextType2000)`

SetName2 sets Name2 field to given value.

### HasName2

`func (o *CateringMenuDetailType) HasName2() bool`

HasName2 returns a boolean if a field has been set.

### GetName3

`func (o *CateringMenuDetailType) GetName3() TranslationTextType2000`

GetName3 returns the Name3 field if non-nil, zero value otherwise.

### GetName3Ok

`func (o *CateringMenuDetailType) GetName3Ok() (*TranslationTextType2000, bool)`

GetName3Ok returns a tuple with the Name3 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName3

`func (o *CateringMenuDetailType) SetName3(v TranslationTextType2000)`

SetName3 sets Name3 field to given value.

### HasName3

`func (o *CateringMenuDetailType) HasName3() bool`

HasName3 returns a boolean if a field has been set.

### GetOrder

`func (o *CateringMenuDetailType) GetOrder() string`

GetOrder returns the Order field if non-nil, zero value otherwise.

### GetOrderOk

`func (o *CateringMenuDetailType) GetOrderOk() (*string, bool)`

GetOrderOk returns a tuple with the Order field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrder

`func (o *CateringMenuDetailType) SetOrder(v string)`

SetOrder sets Order field to given value.

### HasOrder

`func (o *CateringMenuDetailType) HasOrder() bool`

HasOrder returns a boolean if a field has been set.

### GetOrigin1

`func (o *CateringMenuDetailType) GetOrigin1() TranslationTextType2000`

GetOrigin1 returns the Origin1 field if non-nil, zero value otherwise.

### GetOrigin1Ok

`func (o *CateringMenuDetailType) GetOrigin1Ok() (*TranslationTextType2000, bool)`

GetOrigin1Ok returns a tuple with the Origin1 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrigin1

`func (o *CateringMenuDetailType) SetOrigin1(v TranslationTextType2000)`

SetOrigin1 sets Origin1 field to given value.

### HasOrigin1

`func (o *CateringMenuDetailType) HasOrigin1() bool`

HasOrigin1 returns a boolean if a field has been set.

### GetOrigin2

`func (o *CateringMenuDetailType) GetOrigin2() TranslationTextType2000`

GetOrigin2 returns the Origin2 field if non-nil, zero value otherwise.

### GetOrigin2Ok

`func (o *CateringMenuDetailType) GetOrigin2Ok() (*TranslationTextType2000, bool)`

GetOrigin2Ok returns a tuple with the Origin2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrigin2

`func (o *CateringMenuDetailType) SetOrigin2(v TranslationTextType2000)`

SetOrigin2 sets Origin2 field to given value.

### HasOrigin2

`func (o *CateringMenuDetailType) HasOrigin2() bool`

HasOrigin2 returns a boolean if a field has been set.

### GetPortion

`func (o *CateringMenuDetailType) GetPortion() TranslationTextType2000`

GetPortion returns the Portion field if non-nil, zero value otherwise.

### GetPortionOk

`func (o *CateringMenuDetailType) GetPortionOk() (*TranslationTextType2000, bool)`

GetPortionOk returns a tuple with the Portion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPortion

`func (o *CateringMenuDetailType) SetPortion(v TranslationTextType2000)`

SetPortion sets Portion field to given value.

### HasPortion

`func (o *CateringMenuDetailType) HasPortion() bool`

HasPortion returns a boolean if a field has been set.

### GetPrint

`func (o *CateringMenuDetailType) GetPrint() bool`

GetPrint returns the Print field if non-nil, zero value otherwise.

### GetPrintOk

`func (o *CateringMenuDetailType) GetPrintOk() (*bool, bool)`

GetPrintOk returns a tuple with the Print field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrint

`func (o *CateringMenuDetailType) SetPrint(v bool)`

SetPrint sets Print field to given value.

### HasPrint

`func (o *CateringMenuDetailType) HasPrint() bool`

HasPrint returns a boolean if a field has been set.

### GetQuickInsertCode

`func (o *CateringMenuDetailType) GetQuickInsertCode() string`

GetQuickInsertCode returns the QuickInsertCode field if non-nil, zero value otherwise.

### GetQuickInsertCodeOk

`func (o *CateringMenuDetailType) GetQuickInsertCodeOk() (*string, bool)`

GetQuickInsertCodeOk returns a tuple with the QuickInsertCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuickInsertCode

`func (o *CateringMenuDetailType) SetQuickInsertCode(v string)`

SetQuickInsertCode sets QuickInsertCode field to given value.

### HasQuickInsertCode

`func (o *CateringMenuDetailType) HasQuickInsertCode() bool`

HasQuickInsertCode returns a boolean if a field has been set.

### GetResponsibleDepartments

`func (o *CateringMenuDetailType) GetResponsibleDepartments() CodeListType`

GetResponsibleDepartments returns the ResponsibleDepartments field if non-nil, zero value otherwise.

### GetResponsibleDepartmentsOk

`func (o *CateringMenuDetailType) GetResponsibleDepartmentsOk() (*CodeListType, bool)`

GetResponsibleDepartmentsOk returns a tuple with the ResponsibleDepartments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponsibleDepartments

`func (o *CateringMenuDetailType) SetResponsibleDepartments(v CodeListType)`

SetResponsibleDepartments sets ResponsibleDepartments field to given value.

### HasResponsibleDepartments

`func (o *CateringMenuDetailType) HasResponsibleDepartments() bool`

HasResponsibleDepartments returns a boolean if a field has been set.

### GetRestriction

`func (o *CateringMenuDetailType) GetRestriction() string`

GetRestriction returns the Restriction field if non-nil, zero value otherwise.

### GetRestrictionOk

`func (o *CateringMenuDetailType) GetRestrictionOk() (*string, bool)`

GetRestrictionOk returns a tuple with the Restriction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestriction

`func (o *CateringMenuDetailType) SetRestriction(v string)`

SetRestriction sets Restriction field to given value.

### HasRestriction

`func (o *CateringMenuDetailType) HasRestriction() bool`

HasRestriction returns a boolean if a field has been set.

### GetRevenueType

`func (o *CateringMenuDetailType) GetRevenueType() string`

GetRevenueType returns the RevenueType field if non-nil, zero value otherwise.

### GetRevenueTypeOk

`func (o *CateringMenuDetailType) GetRevenueTypeOk() (*string, bool)`

GetRevenueTypeOk returns a tuple with the RevenueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueType

`func (o *CateringMenuDetailType) SetRevenueType(v string)`

SetRevenueType sets RevenueType field to given value.

### HasRevenueType

`func (o *CateringMenuDetailType) HasRevenueType() bool`

HasRevenueType returns a boolean if a field has been set.

### GetSalesPrice

`func (o *CateringMenuDetailType) GetSalesPrice() CurrencyAmountType`

GetSalesPrice returns the SalesPrice field if non-nil, zero value otherwise.

### GetSalesPriceOk

`func (o *CateringMenuDetailType) GetSalesPriceOk() (*CurrencyAmountType, bool)`

GetSalesPriceOk returns a tuple with the SalesPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesPrice

`func (o *CateringMenuDetailType) SetSalesPrice(v CurrencyAmountType)`

SetSalesPrice sets SalesPrice field to given value.

### HasSalesPrice

`func (o *CateringMenuDetailType) HasSalesPrice() bool`

HasSalesPrice returns a boolean if a field has been set.

### GetServings

`func (o *CateringMenuDetailType) GetServings() int32`

GetServings returns the Servings field if non-nil, zero value otherwise.

### GetServingsOk

`func (o *CateringMenuDetailType) GetServingsOk() (*int32, bool)`

GetServingsOk returns a tuple with the Servings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServings

`func (o *CateringMenuDetailType) SetServings(v int32)`

SetServings sets Servings field to given value.

### HasServings

`func (o *CateringMenuDetailType) HasServings() bool`

HasServings returns a boolean if a field has been set.

### GetWebBookable

`func (o *CateringMenuDetailType) GetWebBookable() bool`

GetWebBookable returns the WebBookable field if non-nil, zero value otherwise.

### GetWebBookableOk

`func (o *CateringMenuDetailType) GetWebBookableOk() (*bool, bool)`

GetWebBookableOk returns a tuple with the WebBookable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebBookable

`func (o *CateringMenuDetailType) SetWebBookable(v bool)`

SetWebBookable sets WebBookable field to given value.

### HasWebBookable

`func (o *CateringMenuDetailType) HasWebBookable() bool`

HasWebBookable returns a boolean if a field has been set.

### GetYear

`func (o *CateringMenuDetailType) GetYear() int32`

GetYear returns the Year field if non-nil, zero value otherwise.

### GetYearOk

`func (o *CateringMenuDetailType) GetYearOk() (*int32, bool)`

GetYearOk returns a tuple with the Year field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYear

`func (o *CateringMenuDetailType) SetYear(v int32)`

SetYear sets Year field to given value.

### HasYear

`func (o *CateringMenuDetailType) HasYear() bool`

HasYear returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


